import React from 'react'
import Navigation from '../navigation/Navigation'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useState,useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import {getEmployes} from '../api/restEmployeeApi';
const Employee = () => {

    const [data, setData] = useState(null)

    // List Users
      useEffect(() => {
        getEmployes()
          .then(post => {
           setData(post.data)
          });
      }, [])

   

    function deleteUser(userId){
        fetch('/users/'+userId,
        { method: "DELETE" })
        .then((res)=>{
            res.text();
            let test=data.filter(user=>user.id!==userId);
            console.log(test);
            setData(test);
            })
        .catch((err)=>console.log(err))
        
    }

    return (
        <Container>
            <Navigation />
            <br/>
            <Row>
                <Col xs={12} md={12}>
                    <Card>
                        <Card.Header> <h2>Employee List</h2></Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>EMPLOYEE ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Salary</th>
                                        <th>Phone</th>
                                        <th>Department</th>
                                        <th colSpan={2} style={{ textAlign: "center" }}>Durum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && (data.map(item =>

                                        <tr key={item.employeeId}>
                                            <td>{item.employeeId}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.salary}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.departmentId}</td>
                                            <td width={250}>
                                                <Button variant="primary"><Nav.Link href={`/employeeDetail/${item.employeeId}`}>Detail</Nav.Link></Button>{''}
                                                <Button variant="danger" onClick={() => deleteUser(item.employeeId)}>Delete</Button>{' '}
                                                <Button variant="success">Success</Button>{' '}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Employee
