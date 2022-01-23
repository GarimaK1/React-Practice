import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from './types';

// Action: Set loading to true. (Gets set to false in actions in the reducer)
// Don't need thunk. Simple dispatch.
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

// Action: Get techs from backend API, dispatch to reducer and change the state
// async(dispatch to reducer, getState)
export const getTechs = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
};

// Action: Add new technician
export const addTech = (tech) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }
}

// Action: Delete a technician
export const deleteTech = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
};