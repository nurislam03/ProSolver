import { SET_CURRENT_USER } from '../actions/actionTypes';

const initialState = {
    user: {
        username: '',
        userId: '',
        status: '',
    }
};

function userReducer (state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
              user: action.user
            };
        default:
            return state;
    }
}

export default userReducer;
