import React from 'react';
import axios from 'axios';
import { Button, Form, Message } from 'semantic-ui-react'

import './register.css'

class Register extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Form className='register-form'>
                <Form.Input label='Username' placeholder='Your username'   width={6} required />
                <Form.Input label='Email' placeholder='Your email'   width={6} required />
                <Form.Input label='Password' placeholder='Your password'  width={6} required type='password'/>
                <Form.Input label='Confirm Password' placeholder='Your password'  width={6} required type='password'/>
            <Button>Submit</Button>
            </Form>
        )
    }
}

export default Register;