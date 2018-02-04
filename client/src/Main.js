import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';
//import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';


class Main extends Component {

    render () {
        return (
            <main>
                <switch>
                    <Route exact path='/' component={Home} />
                </switch>
            </main>
        );
    }
}

export default Main;
