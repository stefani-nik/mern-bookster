import React from 'react';
import axios from 'axios';
import { Button, Form, Message } from 'semantic-ui-react'
import { registerFormValidation } from '../../utils/validation'

import './register.css'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.errors = {
            usernameErr : '',
            emailErr : '',
            passwordErr : '',
            confirmPasswordErr : ''
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        this.errors = registerFormValidation(this.state);
      }
    
      onSubmit = (e) => {          
        e.preventDefault();

        if(Object.values(this.errors).every(x => (x === null || x === '')))
        {
            const { username, email, password, confirmPassword } = this.state;
        
            axios.post('/api/account/register', { username, email , password })
              .then((res) => {
                this.props.history.push("/");
              });
        }   
      }

    render() {
        const {username, email, password, confirmPassword} = this.state;
        const {usernameErr, emailErr, passwordErr, confirmPasswordErr} = this.errors;
        return(
            <Form className='register-form' onSubmit={this.onSubmit}>
                <Form.Input label='Username' placeholder='Your username'  
                name="username" value={username}  onChange={this.onChange} width={6} required />
                <Form.Input label='Email' placeholder='Your email'   
                name="email" value={email}  onChange={this.onChange} width={6} required />
                <Form.Input label='Password' placeholder='Your password'  
                name="password" value={password}  onChange={this.onChange} width={6} required type='password'/>
                <Form.Input label='Confirm Password' placeholder='Your password'  
                name="confirmPassword" value={confirmPassword}  onChange={this.onChange} width={6} required type='password'/>
            <Button>Submit</Button>
            <div className="form-err">{usernameErr}</div>
            <div className="form-err">{emailErr}</div>
            <div className="form-err">{passwordErr}</div>
            <div className="form-err">{confirmPasswordErr}</div>
            </Form>
        )
    }
}

export default Register;