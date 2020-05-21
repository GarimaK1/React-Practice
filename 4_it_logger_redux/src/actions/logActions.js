import { 
    GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG, 
    SET_CURRENT_LOG, 
    CLEAR_CURRENT_LOG,
    UPDATE_LOG,
    SEARCH_LOGS
} from './types';

// Our actions
// Making async calls so need to use thunk. Return 'dispatch', dispatch to reducer.
// When not making async calls, simplt return 'type', dispatch to reducer. 
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
            payload: error.response.statusText
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
            payload: error.response.statusText
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
            payload: error.response.statusText
        })
    }
}

// Action: Update a log
export const updateLog = (log) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

// Action: Search server logs
export const searchLogs = (text) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

// Action: Set loading to true. (Gets set to false in actions in the reducer)
// Don't need thunk. Don't need dispatch. Simple UI change.
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

// Action: Set current log value in state in logReducer
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT_LOG,
        payload: log
    }
}

// Action: Clear current log value in state in logReducer
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT_LOG
    }
}