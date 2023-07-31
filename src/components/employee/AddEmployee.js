import React, { useEffect, useState } from 'react'
import Navigation from '../navigation/Navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { saveEmployee } from '../api/restApi';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: null,
        lastName: null,
        email: null,
        salary: null,
        departmentId: null,
        hireDate:new Date("2022-03-25"),
        phoneNumber:"515.123.8181",
        jobId:"AC_ACCOUNT",
        managerId:205

    });


    function handleSubmit(e) {
        e.preventDefault();
        saveEmployee(employee)
            .then((res) => {
                console.log(res.data)
                alert("User Added successfully");
                alert("User Added successfully");
            })
            .catch((err) => console.log(err))

    }


    const onChange = event => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        setEmployee({
            ...employee,
            [name]: value
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
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name='firstName'
                                        value={employee.firstName}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name='lastName'
                                        value={employee.lastName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name='email'
                                        value={employee.email}
                                        onChange={onChange}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicSalary">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name='salary'
                                        value={employee.salary}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicDeparment">
                                    <Form.Label>Firs Name</Form.Label>
                                    <Form.Select
                                        value={employee.department}
                                        onChange={onChange}
                                        aria-label="Default select example"
                                        name='departmentId'>
                                        <option value="-1">Select Department</option>
                                        <option value="10">One</option>
                                        <option value="20">Two</option>
                                        <option value="30">Three</option>
                                    </Form.Select>

                                </Form.Group>
                                <Button variant="primary" type="submit" className='float-end'>
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
