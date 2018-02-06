import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import './ViewsCSS.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Badge,
    Container
} from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
           isOpen: false
        };
    }

   toggle = () => {
       this.setState({
           isOpen: !this.state.isOpen
       });
   }

   render() {
       return (
           <div className="CustomHeaderCSS">
               <div className="container">
                   <Navbar color="faded" light expand="md">
                       <NavbarBrand href="/"> <i class="fas fa-home"></i> ProSolver</NavbarBrand>                       
                       <NavbarToggler onClick={this.toggle} />
                       <Collapse isOpen={this.state.isOpen} navbar>
                           <Nav className="mr-auto" navbar>
                               <NavItem>
                                   <NavLink href="#"> <i class="fas fa-trophy"></i> Leaderboard</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink href="#"> <i class="far fa-handshake"></i> Contribution</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink href="#"> <i class="fas fa-suitcase"></i> Jobs</NavLink>
                               </NavItem>
                           </Nav>

                           <Nav className="ml-auto" navbar>
                               <ul>
                                   <Button color="warning" outline>
                                       <i class="far fa-envelope-open"></i> Message <Badge color="warning"> 4</Badge>
                                   </Button>{' '}

                                   <Button color="warning" outline>
                                       <i class="fas fa-bullhorn"></i> Notifications <Badge color="warning"> 7</Badge>
                                   </Button>{' '}
                               </ul>
                               <ul>
                                   <Button color="warning">Sign In</Button>{' '}
                                   <Button color="danger">Sign Up</Button>
                               </ul>
                           </Nav>
                       </Collapse>
                   </Navbar>
               </div>
           </div>
       );
   }
}

export default Header;
