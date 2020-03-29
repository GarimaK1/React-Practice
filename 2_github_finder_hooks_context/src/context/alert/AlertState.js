import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from '../types';
// state and actions here instead of in App.js file

const AlertState = props => {

    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);
    // dispatch dispatches actions/object{type, payload} to reducer
   
    // set alert
    const setAlert = (message, type) => {
        dispatch({ type: SET_ALERT, payload: { message, type }});
        setTimeout(() => dispatch({ type: REMOVE_ALERT}), 4000);
    }

    // remove alert

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;
