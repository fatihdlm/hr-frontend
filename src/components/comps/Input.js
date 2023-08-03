import React from 'react'
import Form from 'react-bootstrap/Form'

const Input = (props) => {
    const{label,name,error,onChange,type}=props
    return (
        <Form.Group className="mb-3" controlId={'formBasic'+name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                className={error ? 'form-control is-invalid' : 'form-control'}
                type={type}
                name={name}
                onChange={onChange}
            />
            <div className="invalid-feedback">
                {error}
            </div>
        </Form.Group>
    )
}

export default Input
