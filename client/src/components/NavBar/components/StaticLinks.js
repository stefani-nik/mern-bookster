import React from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import NavListItem  from './NavListItem';
import ArticlesDropdown from './Articles/ArticlesDropdown';
import BooksDropdown from './Books/BooksDropdown'
import MagazinesDropdown from './Magazines/MagazinesDropdown'

export default class NavBar extends React.Component {

  state = { 
    activeItem: 'home'
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const isLoggedIn = localStorage.hasOwnProperty('accessToken');
  
    return (
      <div>
        <Menu inverted pointing secondary  size='large' className='navbar-list'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <NavListItem role='Home' navigation='/'></NavListItem>
          </Menu.Item>
          <Menu.Item name='books' active={activeItem === 'books'} onClick={this.handleItemClick}>
              <NavListItem role='Books' navigation='/books'>
              </NavListItem>
              <BooksDropdown />
          </Menu.Item>
          <Menu.Item name='magazines' active={activeItem === 'magazines'} onClick={this.handleItemClick}>
                <NavListItem role='Magazines' navigation='/magazines'></NavListItem>
                <MagazinesDropdown />
          </Menu.Item>
          <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>
                <NavListItem role='Articles' navigation='/articles'>
                </NavListItem>  
                <ArticlesDropdown />
           </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} style={isLoggedIn ? {} : { display: 'none' }}>
              <NavListItem role='Logout' navigation='/logout'></NavListItem>
            </Menu.Item>
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
             <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} style={isLoggedIn ? { display: 'none' } : {}}> 
               <NavListItem role='Login' navigation='/login'></NavListItem>
            </Menu.Item> 
            <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick} style={isLoggedIn ? { display: 'none' } : {}}>
                <NavListItem role='Register' navigation='/register'></NavListItem>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
