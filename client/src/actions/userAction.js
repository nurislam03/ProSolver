import axios from 'axios';
import { SET_CURRENT_USER } from './actionTypes';


export function setCurrentUser(user) {
    return {
        type: actionTypes.SET_CURRENT_USER,
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
            console.error(`Failed to fetch: ${err}`);
            //res.status(400).send("no user.");
        });
    }
}
