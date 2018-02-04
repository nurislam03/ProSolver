import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './ComponentsCSS.css';


class Home extends Component {

    render() {
        return (
            <div className="HomeBodyCSS">
                <div className="container">
                    <h1>Welcome to ProSolver</h1>
                    <p>Learn more, Share more</p>
                </div>
            </div>
        );
    }
}

export default Home;
