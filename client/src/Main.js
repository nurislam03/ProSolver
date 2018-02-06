import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';
//import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';
import SignUp from './components/users/SignUp';
import SignIn from './components/users/SignIn';
import Profile from './components/users/Profile';


class Main extends Component {

    render () {
        return (
            <main>
                <switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/signin' component={SignIn} />

                    {/*later, singin state will require to got to profile */}
                    <Route exact path='/profile' component={Profile} />
                </switch>
            </main>
        );
    }
}

export default Main;
