import React, { useEffect, useState } from 'react'
import Navigation from '../navigation/Navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { saveEmployee } from '../api/restEmployeeApi';
import { getDepartment } from '../api/restDepartmentApi';
import Input from '../comps/Input';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: null,
        lastName: null,
        email: null,
        salary: null,
        departmentId: null,
        hireDate: new Date("2022-03-25"),
        phoneNumber: "515.123.8181",
        jobId: "AC_ACCOUNT",
        managerId: 205

    });

    const [department, setDepartment] = useState(null);
    const [pendingResponse, setPendingResponse] = useState(false)
    const [errors, setErrors] = useState(null)

    // List Users
    useEffect(() => {
        getDepartment()
            .then(post => {
                setDepartment(post.data)
            });
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setPendingResponse(true);
        try {
            const result = await saveEmployee(employee);
            console.log(result);
        } catch (error) {
            if (error.response.data.validationErrors)
                setErrors(error.response.data.validationErrors);
        }
        setPendingResponse(false);
        //another style
        // .then((res) => {
        //     console.log(res.data)
        //     alert("User Added successfully");
        //     setPendingResponse(false)

        // })
        // .catch((err) => {
        //     console.log(err);
        //     setPendingResponse(false)
        // })

    }


    const onChange = event => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)

        if (errors) {
            errors[name] = undefined;
        }
        setErrors(errors);
        setEmployee({
            ...employee,
            [name]: value,
        });
    }


    return (



        <Container>

            <Navigation />
            <br />
            <Row>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Header><h1>Add Employee</h1></Card.Header>
                        <Card.Body>
                            <Form method='POST' onSubmit={handleSubmit}>
                                <Input name='firstName' label='First Name' onChange={onChange} error={errors?.firstName} type='text' />
                                <Input name='lastName' label='Last Name' onChange={onChange} error={errors?.lastName} type='text' />
                                <Input name='email' label='Email' onChange={onChange} error={errors?.email} type='email' />
                                <Input name='salary' label='Salary' onChange={onChange} error={errors?.salary} type='number' />

                                <Form.Group className="mb-3" controlId="formBasicDeparment">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Select
                                        onChange={onChange}
                                        aria-label="Default select example"
                                        name='departmentId'>
                                        <option value="-1">Select Department</option>
                                        {department && department.map((dep) => {
                                            return (
                                                <option key={dep.departmentId} value={dep.departmentId}>
                                                    {dep.departmentName}
                                                </option>
                                            );
                                        })}
                                    </Form.Select>

                                </Form.Group>
                                <Button variant="primary" type="submit" className='float-end' disabled={pendingResponse}>
                                    {pendingResponse &&
                                        <span className="spinner-border spinner-border-sm" />}
                                    Add Employee

                                </Button>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddEmployee
