import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    GET_INITIAL_USERS
} from '../types';

// reducer is just a function
// it is simply returning updated state based on action.
export default (state, action) => {
    // dispatch dispatches actions/object{type, payload} to reducer
    // To update deeply nested objects, can use 'immer' library. Refer: https://react.dev/learn/updating-objects-in-state#updating-a-nested-object 
    switch(action.type) {
        case GET_INITIAL_USERS:
            return { ...state, users: action.payload, loading: false };
        case GET_USER:
            return { ...state, user: action.payload, loading: false };
        case GET_REPOS:
            return { ...state, repos: action.payload, loading: false };
        case CLEAR_USERS:
            return { ...state, users: [], loading: false };
        case SEARCH_USERS:
            return { ...state, users: action.payload, loading: false };
        case SET_LOADING:
            return { ...state, loading: true };
        default: 
            return state;
    }
}