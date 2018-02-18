import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
//import { Router, browserHistory } from 'react-router';

import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css'; // bootstrap CSS


ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
);
