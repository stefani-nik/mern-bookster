import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/profile';
import { Button, Form, Message, Header, Divider } from 'semantic-ui-react'
import { registerFormValidation } from '../../utils/validation'


class UserProfile extends React.Component {
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
    componentDidMount(){
        let user = localStorage.getItem('user');
        this.props.actions.getUserProfile(user);
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
           this.props.actions.updateUserProfile(localStorage.getItem('user'), this.state)
        }   
      }

    render() {
        const {username, email, password, confirmPassword} = this.state;
        const {usernameErr, emailErr, passwordErr, confirmPasswordErr} = this.errors;

        if(!this.props.userInfo) return null;


        return(
        <div className='forms-wrapper'>
            <Divider/>
                <Header size='huge' textAlign='center' className='page-title'>Your Profile</Header>
            <Divider/>
            <Form className='register-form' onSubmit={this.onSubmit}>
                <Form.Input label='Username' placeholder={this.props.userInfo.username}  
                name="username" value={username}  onChange={this.onChange} width={18} required/>
                <Form.Input label='Email' placeholder={this.props.userInfo.email}    
                name="email" value={email}  onChange={this.onChange} width={18} required />
                <Form.Input label='Change Password' 
                name="password" value={password}  onChange={this.onChange} width={18} required type='password'/>
                <Form.Input label='Confirm Password'
                name="confirmPassword" value={confirmPassword}  onChange={this.onChange} width={18} required type='password'/>
            <Button color='blue' fluid>Submit</Button>
            <div className="form-err">{usernameErr}</div>
            <div className="form-err">{emailErr}</div>
            <div className="form-err">{passwordErr}</div>
            <div className="form-err">{confirmPasswordErr}</div>
            </Form>
        </div>
        )
    }
}
const mapStateToProps = (state) => (
    {
        userInfo: state.profile.userInfo,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
