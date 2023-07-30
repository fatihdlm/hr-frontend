import React from 'react'
import Navigation from '../navigation/Navigation'
import Table from 'react-bootstrap/esm/Table'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
const Home = () => {
    return (

        <Container>

            <Navigation />
            <h1>Home</h1>
            <Row>
                <Col xs={12} md={8}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr><td>test</td></tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>



    )
}

export default Home
