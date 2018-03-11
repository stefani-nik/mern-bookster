import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import './Header.css'

import logo from '../../images/logo.png'

const Header = (props) => {
    return (
         <header className="App-header" >
             <Container fluid>
               <div className="col-md-4 col-sm-6">
                    <h1 className="logo">
                        <a href ="#">
                            <img className="header-logo" src={logo} alt="Bookster"/>
                        </a>
                    </h1>
               </div>
               <div className="col-md-8 col-sm-6">
                    <nav className="user-navigation">
                        <span className="search-toggle">
                        Search
                        </span>
                        <span className="loginForm"> 
                        Login
                        </span>
                    </nav>
                    <NavBar/>
               </div>   
            </Container>
        </header>
        );
}

export default Header;