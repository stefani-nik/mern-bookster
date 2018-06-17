import React from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import { Menu, Segment, Dropdown } from 'semantic-ui-react';
import ArticlesDropdown from './Articles/ArticlesDropdown';
import BooksDropdown from './Books/BooksDropdown'
import MagazinesDropdown from './Magazines/MagazinesDropdown'

export default class NavBar extends React.Component {

  state = { 
    activeItem: 'home',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const isLoggedIn = localStorage.hasOwnProperty('accessToken');
    const profileNavigation = '/profile/' + localStorage.getItem('user');
  
    return (
      <div>
        <Menu inverted pointing secondary  size='large' className='navbar-list'>
          <Menu.Item name='home' role='Home' as = {Link}  to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
          {/* <Menu.Item name='books' role='Books' as = {Link}  to='/books' active={activeItem === 'books'} onClick={this.handleItemClick} /> */}
            <Dropdown text="Books" as={ Link } to='/books' active={activeItem === 'books'} onClick={this.handleItemClick}  simple className='link item' item>
              <BooksDropdown/>
            </Dropdown>
          <MagazinesDropdown />
          <ArticlesDropdown />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' role='Logout' as = {Link} to='/logout' active={activeItem === 'logout'} onClick={this.handleItemClick} style={isLoggedIn ? {} : { display: 'none' }} />
            <Menu.Item name='profile' role='Profile' as = {Link} to={profileNavigation} active={activeItem === 'profile'} onClick={this.handleItemClick}  style={isLoggedIn ? {} : { display: 'none' }}/>
            <Menu.Item name='collections' role='Collections' as = {Link} to='/collections' active={activeItem === 'collections'} onClick={this.handleItemClick} style={isLoggedIn ? {} : { display: 'none' }}/>
            <Menu.Item name='login' role='Login'  as = {Link} to='/login' active={activeItem === 'login'} onClick={this.handleItemClick} style={isLoggedIn ? { display: 'none' } : {}}/> 
            <Menu.Item name='register' role='Register' as = {Link} to='/register' active={activeItem === 'register'} onClick={this.handleItemClick} style={isLoggedIn ? { display: 'none' } : {}}/>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
