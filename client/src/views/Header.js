import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Container } from 'reactstrap';

import './ViewsCSS.css';
import {
  NavLink,
} from 'reactstrap';


const CustomHeader = () => {
  return (
      <div className="CustomHeaderCSS">
        <h4>I'm Hreader</h4>
      </div>
  );
};

class Header extends Component {

    render() {
      return (
        <div>
            <CustomHeader />
        </div>
      );
    }
}

export default Header;
