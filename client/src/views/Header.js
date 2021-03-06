import React, { Component } from 'react';
//import { LinkContainer } from 'react-router-bootstrap';
import '../styles/ViewsCSS.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Badge,
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
                       <NavbarBrand style={{color: 'yellow'}} href="/"> <i class="fas fa-home"></i> ProSolver</NavbarBrand>
                       <NavbarToggler onClick={this.toggle} />
                       <Collapse isOpen={this.state.isOpen} navbar>
                           <Nav className="mr-auto" navbar>
                               <NavItem>
                                   <NavLink style={{color: 'yellow'}} href="#"> <i class="fas fa-trophy"></i> Leaderboard</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink style={{color: 'yellow'}} href="#"> <i class="far fa-handshake"></i> Contribution</NavLink>
                               </NavItem>
                               <NavItem>
                                   <NavLink style={{color: 'yellow'}} href="#"> <i class="fas fa-suitcase"></i> Jobs</NavLink>
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
                                   <Button color="warning" href="/signin">Sign In</Button>{' '}
                                   <Button color="danger"  href="/signup">Sign Up</Button>
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
