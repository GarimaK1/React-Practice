import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from "./authReducer";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
    const initialState = {
        user: null,
        isAuthenticated: false,
        token: localStorage.getItem('token'),
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load user (checks which user is logged in and get user data)

    // Register user (register user, get token)

    // Login user (Login user, get token)

    // Logout (logout, remove token, clear state)

    // Clear errors (clear errors from state)

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
