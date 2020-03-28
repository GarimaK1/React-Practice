import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    GET_INITIAL_USERS
} from '../types';
// state and actions here instead of in App.js file

const GithubState = props => {

    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: []
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    // dispatch dispatches actions/object{type, payload} to reducer

    // get initial default 30 users from github API
    const initialUsers = async () => {
        setLoading();
        const responseData = await axios.get(`https://api.github.com/users?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // console.log(responseData.data);
        dispatch({ type: GET_INITIAL_USERS, payload: responseData.data });
    }

    // Search github users
    const searchUsers = async (userStringToSearch) => {
        setLoading();
        // console.log("inside app.js " + userStringToSearch);
        const responseData = await axios.get(`https://api.github.com/search/users?q=${userStringToSearch}&page=1&per_page=20&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // console.log(responseData.data.items);
        dispatch({ type: SEARCH_USERS, payload: responseData.data.items })
    }

    // get a specific user from github api
    const getUserFromGitHub = async (username) => {
        setLoading();
        const responseData = await axios.get(`https://api.github.com/users/${username}?page=1&per_page=20&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // console.log(responseData);
        dispatch({ type: GET_USER, payload: responseData.data });
    }

    // Clear users from state 
    // As a by-product, clears github search results.
    // Then show initial users too.
    const clearUsers = () => {
        dispatch({ type: CLEAR_USERS });
        // initialUsers();
    }
   
    // get repositories for a specific user
    // Show github user repos (first 5):
    const getUserRepos = async (username) => {
        setLoading();
        const responseData = await axios.get(`https://api.github.com/users/${username}/repos?page=1&per_page=5&sort=updated&order=desc&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // console.log(responseData);
        dispatch({ type: GET_REPOS, payload: responseData.data });
    }

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    // set alert

    // remove alert

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            initialUsers,
            clearUsers,
            getUserFromGitHub,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;
