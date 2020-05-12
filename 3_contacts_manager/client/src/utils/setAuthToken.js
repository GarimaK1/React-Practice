// This file is basically like AuthInterceptor in Angular.
// https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests
import axios from 'axios';

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;