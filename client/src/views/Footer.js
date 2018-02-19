import React, { Component } from 'react';
//import {LinkContainer} from 'react-router-bootstrap';
//import { Container } from 'reactstrap';

import '../styles/ViewsCSS.css';



const CustomFooter = () => {
  return (
      <div className="CustomFooterCSS">
          <h6>Copyright ©2018 ProSolver</h6>
          <p>All Rights Reserved <a href="https://nurislam03.blogspot.com"> ProSolver.Inc </a></p>
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
