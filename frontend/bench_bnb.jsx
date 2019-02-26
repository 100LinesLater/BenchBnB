import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login} from './util/session_api_util';

window.login = login;

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById('root');
    ReactDOM.render(<h2>Welcome to Bench BnB</h2>, rootEl);
});