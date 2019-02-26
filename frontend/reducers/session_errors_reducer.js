import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionErrorsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return {errors: action.errors};
        case RECEIVE_CURRENT_USER:
            return {errors: null};
        default:
            return state;
    }
};

export default SessionErrorsReducer;