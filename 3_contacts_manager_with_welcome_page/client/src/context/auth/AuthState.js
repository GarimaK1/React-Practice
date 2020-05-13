import React, { useReducer } from 'react';
import axios from 'axios';
import setAuthToken from "../../utils/setAuthToken";
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
    const loadUser = async () => {
        // Load token into common header.
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const resp = await axios.get('/api/auth');
            console.log('inside loadUser');
            // console.log(resp);
            dispatch({ type: USER_LOADED, payload: resp.data.user })
        } catch (error) {
            console.log(error.response);
            if (error.response.data.errors) {
                dispatch({ type: REGISTER_FAIL, payload: error.response.data.errors[0].msg });
            } else if (error.response.data.message) {
                dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
            } else if (error.response.data) {
                dispatch({ type: AUTH_ERROR, payload: error.response.data });
            } else if (error.response) {
                dispatch({ type: AUTH_ERROR, payload: error.response });
            }
        }
    }

    // Register user (register user, get token)
    const register = async (formData) => {
        // Because we are using axios as http client, we need to set some headers.
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const resp = await axios.post('/api/users', formData, config);
            // console.log(resp);
            dispatch({ type: REGISTER_SUCCESS, payload: resp.data.token });
            loadUser(); 
        } catch (error) {
            // https://github.com/axios/axios#handling-errors
            // To see how to catch response with status code other than 2xx, 
            // Refer: https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
            console.log(error.response);
            if (error.response.data.errors) {
                dispatch({ type: REGISTER_FAIL, payload: error.response.data.errors[0].msg });
            } else if (error.response.data.message) {
                dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
            } else if (error.response.data) {
                dispatch({ type: REGISTER_FAIL, payload: error.response.data });
            } else if (error.response) {
                dispatch({ type: REGISTER_FAIL, payload: error.response });
            }
        }
    }
    

    // Login user (Login user, get token)
    const login = async (formData) => {
        // Because we are using axios as http client, we need to set some headers.
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const resp = await axios.post('/api/auth', formData, config);
            // console.log(resp);
            dispatch({ type: LOGIN_SUCCESS, payload: resp.data.token });
            loadUser();
        } catch (error) {
            // https://github.com/axios/axios#handling-errors
            // To see how to catch response with status code other than 2xx, 
            // Refer: https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
            console.log(error.response.data);
            if (error.response.data.errors) {
                dispatch({ type: LOGIN_FAIL, payload: error.response.data.errors[0].msg });
            } else if (error.response.data.message) {
                dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
            } else if (error.response.data) {
                dispatch({ type: LOGIN_FAIL, payload: error.response.data });
            } else if (error.response) {
                dispatch({ type: LOGIN_FAIL, payload: error.response });
            }
        }
    }

    // Logout (logout, remove token, clear state)
    const logout = () => dispatch({type: LOGOUT});

    // Clear errors (clear errors from state)
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
