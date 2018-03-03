import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Login from './Login'

const Header = ({title}) => {
    return (
         <header className="App-header" >
         <Login/>
          <Jumbotron fluid>
             <Container fluid>
                <a href = "/">
                 <h1 className="app-title">{title}</h1>
                </a>
                 <h2 className="app-subtitle">Chatchy quote here</h2>        
               </Container>
            </Jumbotron>
        </header>
        );
}

export default Header;