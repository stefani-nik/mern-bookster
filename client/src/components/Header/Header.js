import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';
import SearchField from '../Search/Search';
import logo from '../../images/logo.png';
import './header.css';

const Header = (props) => {
    return (
         <header className="app-header" >
            <SearchField/>
            <Image className="header-logo" src={logo} alt="Bookster" size="medium" centered/>
            <NavBar/> 
        </header>
        );
}

export default Header;