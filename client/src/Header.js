import React from 'react'
import logo from './logo.svg'

const Header = ({title}) => {
    return (
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
          <a href="http://">Link</a>
        </header>
        );
}

export default Header;