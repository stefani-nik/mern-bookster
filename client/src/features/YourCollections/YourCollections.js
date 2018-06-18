import React from 'react';
import axios from 'axios';
import { Button, Form, Message, Header, Divider, Menu } from 'semantic-ui-react'

class YourCollections extends React.Component {
    constructor() {
        super();
    }

    state = { activeItem: 'Read' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
        </div>
        )
    }
}

export default YourCollections;