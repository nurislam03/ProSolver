import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import Header from './views/Header';
import Footer from './views/Footer';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
