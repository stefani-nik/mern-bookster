import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/user';
import { Button, Form, Message, Header, Divider, Menu } from 'semantic-ui-react';
import UserCollection from './components/UserCollection'

class YourCollections extends React.Component {
    constructor() {
        super();
    }

    state = { 
        activeItem: 'Read',
        collections : []
     }

    componentDidMount(){
        this.setState({user : localStorage.getItem('user')});
        this.props.actions.getUserRead(this.state.user);
        this.state.collections = this.props.read;
    }

    handleItemClick = (e, { name }) => {

        this.setState({ activeItem: name })
        if(this.state.activeItem === 'Read'){
            this.props.actions.getUserRead(this.state.user);
            this.state.collections = this.props.read;
        }
        else if(this.state.activeItem === 'Currently Reading'){
            this.props.actions.getUserReading(this.state.user);
            this.state.collections = this.props.reading;
        }
        else{
            this.props.actions.getUserToRead(this.state.user);
            this.state.collections = this.props.toread;
        }
    }
    render() {
    
        const { activeItem } = this.state;
        return(
        <div className='forms-wrapper'>
            <Divider/>
                <Header size='huge' textAlign='center' className='page-title'>Your collections</Header>
            <Divider/>
            <Menu secondary vertical>
                <Menu.Item name='Read' active={activeItem === 'Read'} onClick={this.handleItemClick}/>
                <Menu.Item name='Currently Reading' active={activeItem === 'Currently Reading'} onClick={this.handleItemClick}/>
                <Menu.Item name='Want to Read' active={activeItem === 'Want to Read'} onClick={this.handleItemClick}/>            
            </Menu>
            <UserCollection posts={this.state.collections}/>
        </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        read: state.user.read,
        reading : state.user.reading,
        toread : state.user.toread
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(YourCollections);
