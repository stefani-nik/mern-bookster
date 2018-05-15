import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.css'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends React.Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted pointing secondary  size='large' className='navbar-list'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
          <Menu.Item name='books' active={activeItem === 'books'} onClick={this.handleItemClick} />
          <Menu.Item name='magazines' active={activeItem === 'magazines'} onClick={this.handleItemClick} />
          <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

