import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  router: routerReducer
});

export default rootReducer;
