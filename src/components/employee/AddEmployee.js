import React, { useEffect, useState} from 'react'
import Navigation from '../navigation/Navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AddEmployee = () => {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");

    

    function handleSubmit(e){

        e.preventDefault();
        fetch('http://localhost:8080/users',
        { method: "POST", 
          headers:{
           "Content-Type":"application/json"
          }, 
          body: JSON.stringify({
           firstName:firstName,
           lastName:lastName
          }),
        })
        .then((res)=>{
            res.json();
           // setFirstName("");
           // setLastName("");
            alert("User Added successfully");
            const timeout = setTimeout(() => {
                // 👇️ redirects to an external URL
                window.location.replace('/users');
              }, 3);
          
              //return () => clearTimeout(timeout);
        })
        .catch((err)=>console.log(err))
       
    }

    function save(e) {
        console.log(e);
        alert(e+"\n"+firstName+"\n "+lastName)
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        console.log(form.method);
        // You can pass formData as a fetch body directly:
        fetch('http://localhost:8080/users', { method: form.method, body: formData, dataType:'json' });
        // You can generate a URL out of it, as the browser does by default:
        console.log(new URLSearchParams(formData).toString());
        // You can work with it as a plain object.
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson); // (!) This doesn't include multiple select values
        // Or you can get an array of name-value pairs.
        console.log([...formData.entries()]);
      }

      function keyHandler(event){
        alert(typeof event.target.value+" "+event.target.value)
        if(typeof event.target.value===Number){
            alert("this is a number")
        }
      }

      


    return (
        <Container>

            <Navigation />
          <br/>
            <Row>
                <Col xs={12} md={8}>
                   <Card>
                    <Card.Header><h1>Add User</h1></Card.Header>
                    <Card.Body>
                    <Form method='POST' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>Firs Name</Form.Label>
                            <Form.Control 
                            type="number" 
                            placeholder="Type your First Name" 
                            name='firstName'
                            value={firstName}
                            onKeyDown={(event)=>keyHandler(event)}
                            onKeyUp={(event)=>keyHandler(event)}
                            onKeyRelease={(event)=>keyHandler(event)}
                            onChange={(event)=>{
                                setFirstName(event.target.value)
                            }}
                            />
                            <Form.Text className="text-muted">
                                Please Type your first name 
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                            type="input" 
                            placeholder="Type your First Name" 
                            name='lastName'
                            value={lastName}
                            onChange={(event)=>{
                                setLastName(event.target.value)
                            }} 
                            />
                            <Form.Text className="text-muted">
                                Please Type your last name 
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='float-end'>
                            Add User
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
