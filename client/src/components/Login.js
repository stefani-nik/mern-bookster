import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/Login.css'

export default class Login extends React.Component {
  render() {
    return (
      <Form inline className="login-form">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail">Username</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="johnDoe@gmail.com" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}