import React from 'react';
import axios from 'axios';
import { Button, Form, Message } from 'semantic-ui-react'

import './login.css'

class Login extends React.Component {
    constructor() {
        super();
    }

    state = {
        response: ''
    };

    

    render() {
        return(
            <Form className='login-form'>
                <Form.Input label='Username' placeholder='Your username'   width={6} required />
                <Form.Input label='Password' placeholder='Your password'  width={6} required type='password'/>
            <Button>Submit</Button>
            </Form>
        )
    }
}

export default Login;