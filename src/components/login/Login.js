import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { login } from '../api/restEmployeeApi';
const Login = () => {
    const [userInputs, setUserInputs] = useState({
        userName: null,
        password: null
    });

    const btnOnclik = event=> {
        event.preventDefault();
        const { userName, password } = userInputs
        const body = {
            userName,
            password
        }
        login(body);

    }
    const onChange = event => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        setUserInputs({
            ...userInputs,
            [name]: value,
        });
    }
    return (
        <Container>
            <div className='row justify-content-md-center mt-xl-5'>
                <form className='mt-xl-5 col-lg-6'>
                    <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={onChange} name='userName' type="email" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={onChange} name="password" type="password" className="form-control mt-1" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 float-end" onClick={btnOnclik}>Submit</button>
                </form>
            </div>

        </Container>
    )
}

export default Login
