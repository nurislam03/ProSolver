import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';
//import registerServiceWorker from './registerServiceWorker';

import HomePage from './components/HomePage';
import SignUpPage from './components/signup/SignUpPage';
import SignInPage from './components/signin/SignInPage';
import ProfilePage from './components/profile/ProfilePage';


class Main extends Component {

    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/signup' component={SignUpPage} />
                    <Route exact path='/signin' component={SignInPage} />

                    {/*later,  */}
                    <Route exact path='/profile' component={ProfilePage} />
                </Switch>
            </main>
        );
    }
}

export default Main;
