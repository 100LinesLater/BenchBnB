import {RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash';

const SessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {id: action.currentUser.id});
        case LOGOUT_CURRENT_USER: 
            return { id: null };
        default:
            return oldState;
    }
};

export default SessionReducer;