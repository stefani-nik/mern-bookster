import React from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import NavListItem  from './NavListItem';

export default class NavBar extends React.Component {

  state = { 
    activeItem: 'home'
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted pointing secondary  size='large' className='navbar-list'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <NavListItem role='Home' navigation='/home'></NavListItem>
          </Menu.Item>
          <Menu.Item name='books' active={activeItem === 'books'} onClick={this.handleItemClick}></Menu.Item>
          <Menu.Item name='magazines' active={activeItem === 'magazines'} onClick={this.handleItemClick}></Menu.Item>
          <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} >
               <NavListItem role='Login' navigation='/login'></NavListItem>
            </Menu.Item>
            <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick}>
                <NavListItem role='Register' navigation='/register'></NavListItem>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
