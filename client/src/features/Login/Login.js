import React from 'react';
import axios from 'axios';
import { Button, Form, Message, Header, Divider } from 'semantic-ui-react'

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
            console.log(res);
            localStorage.setItem('accessToken', res.data.tokens.accessToken);
            localStorage.setItem('user' , res.data.user.username);
            this.props.history.push("/")
          });
      }

    render() {
        const { username, password } = this.state;
        return(
            <div className='forms-wrapper'>
            <Divider/>
                <Header size='huge' textAlign='center' className='page-title'>Login</Header>
            <Divider/>
            <Form className='register-form' onSubmit={this.onSubmit}>
                <Form.Input label='Username' placeholder='Your username' 
                name="username" value={username}  onChange={this.onChange} width={18} required />
                <Form.Input label='Password' placeholder='Your password'
                name="password" value={password}  onChange={this.onChange}  width={18} required type='password'/>
            <Button type="submit" color='blue' fluid >Login</Button>
            </Form>
            </div>
        )
    }
}

export default Login;