import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
        <div className="top-navigation">
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Magazines</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Art</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Life</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        );
    }
}
