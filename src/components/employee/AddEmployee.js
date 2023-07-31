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

    const [employee, setEployee] = useState("");


    function handleSubmit(e) {

        e.preventDefault();
        saveEmployee(employee)
            .then((res) => {
                res.json();
                alert("User Added successfully");
            })
            .catch((err) => console.log(err))

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
                                        type="input"
                                        name='firstName'
                                        value={employee.firstName}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="input"
                                        name='lastName'
                                        value={employee.lastName}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name='firstName'
                                        value={employee.firstName}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name='firstName'
                                        value={employee.firstName}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>Firs Name</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
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
