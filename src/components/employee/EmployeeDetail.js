import React from 'react'
import Navigation from '../navigation/Navigation'
import Card from 'react-bootstrap/esm/Card'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const EmployeeDetail = () => {

    //this id comes from employeeDetail Link
    const {id}=useParams()
    const [ data, setData] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8080/employees/${id}`)
            .then(response => response.json())
            .then(
                (result)=>{ setData(result)},
                (error)=>{console.log("error: "+error)}
                )}, []);
  return (
    <Container>

    <Navigation />
    <h1>About</h1>
    <Row>
        <Col xs={12} md={8}>
            <Card>
                <Card.Header><h2>User Detail</h2></Card.Header>
                <Card.Body>
                 
                    ID :{console.log(data.firstName)}
                    Name :
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

  )
}

export default EmployeeDetail
