import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Container } from 'reactstrap';

import './ViewsCSS.css';
import {
  NavLink,
} from 'reactstrap';


const CustomFooter = () => {
  return (
      <div className="CustomFooterCSS">
          <div className="container">
              <h6>Copyright ©2018 ProSolver</h6>
              <p>All Rights Reserved <a href="www.nurislam03.blogspot.com"> ProSolver.Inc </a></p>
          </div>
      </div>
  );
};

class Footer extends Component {

    render() {
      return (
        <div>
            <CustomFooter />
        </div>
      );
    }
}

export default Footer;
