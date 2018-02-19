import axios from 'axios';
import { SET_CURRENT_USER } from './types';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function login(data) {
    return dispatch => {
        return axios.post('/api/auth', data)
        .then(res => {
            dispatch(setCurrentUser(resp));
        })
        .catch((err) => {
              res.status(400).send("no user.");
        });
    }
}
