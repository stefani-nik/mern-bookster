import React from 'react';
import axios from 'axios';
import { Button, Form, Message } from 'semantic-ui-react'

import './login.css'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        axios.post('/api/account/login', { username, password })
          .then((res) => {
            localStorage.setItem('accessToken', res.data.tokens.accessToken);
            this.props.history.push("/")
          });
      }

    render() {
        const { username, password } = this.state;
        return(
            <Form className='login-form' onSubmit={this.onSubmit}>
                <Form.Input label='Username' placeholder='Your username' 
                name="username" value={username}  onChange={this.onChange} width={6} required />
                <Form.Input label='Password' placeholder='Your password'
                name="password" value={password}  onChange={this.onChange}  width={6} required type='password'/>
            <Button type="submit" >Submit</Button>
            </Form>
        )
    }
}

export default Login;