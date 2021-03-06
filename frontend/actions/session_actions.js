import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER, 

});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS, 
    errors
});

export const signup = (user) => dispatch (
    ApiUtil.signup(user).then(res => dispatch(receiveCurrentUser(res)))
);

export const login = (session) => dispatch (
    ApiUtil.login(session).then(res => dispatch(receiveCurrentUser(res)))
);

export const logout = () => dispatch (
    ApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
);