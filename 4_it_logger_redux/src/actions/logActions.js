import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from './types';

// Our actions
// Making async calls so need to use thunk.
// Dispatching to logReducer

/* export const getLogs = () => {
    //(dispatch to reducer, getState)
    return async (dispatch) => {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    };
} */

// Action: Get logs from backend API, dispatch to reducer and change the state
// async(dispatch to reducer, getState)
export const getLogs = () => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
};

// Action: Add new log
export const addLog = (log) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}

// Action: Delete a log
export const deleteLog = (id) => async (dispatch) => {
    try {
        console.log(id);

        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}

// Action: Set loading to true. (Gets set to false in actions in the reducer)
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}