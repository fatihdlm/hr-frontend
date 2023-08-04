import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Login = () => {
    const [input, setInput] = useState(null)

    const onChange = event => {
        console.log(event.target.name)
    }
    return (
        <Container>
            <div className='row justify-content-md-center mt-xl-5'>
                <form className='mt-xl-5 col-lg-6'>
                    <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={onChange} name='email' type="email" class="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group mt-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={onChange} name="password" type="password" class="form-control mt-1" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary mt-3 float-end ">Submit</button>
                </form>
            </div>

        </Container>
    )
}

export default Login
