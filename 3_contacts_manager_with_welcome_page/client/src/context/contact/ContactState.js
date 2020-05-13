import React, { useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from "./contactReducer";
import { 
    GET_CONTACTS,
    CLEAR_CONTACTS,
    ADD_CONTACT, 
    DELETE_CONTACT, 
    FILTER_CONTACTS, 
    CLEAR_CURRENT, 
    SET_CURRENT,
    UPDATE_CONTACT, 
    CLEAR_FILTER,
    CONTACT_ERROR,
    CLEAR_ERRORS 
} from '../types';

const ContactState = (props) => {
    const initialState = { 
        contacts: null,
        current: null,
        filtered: null,
        error: null,
        loading: true
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Clear errors (clear errors from state)
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    // Get contacts for user
    const getContacts = async () => {
        try {
            const resp = await axios.get('/api/contacts');
            // console.log(resp);
            dispatch({ type: GET_CONTACTS, payload: resp.data });
        } catch (error) {
            // console.log(error);
            console.log(error.response);
            // console.log(error.response.data.message);
            if (error.response.data.errors) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
            } else if (error.response.data.message) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
            } else if (error.response.data) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data });
            } else if (error.response) {
                dispatch({ type: CONTACT_ERROR, payload: error.response });
            } else if (error) {
                dispatch({ type: CONTACT_ERROR, payload: error });
            }
        }
    }

    // Add contact
    const addContact = async (contact) => {
        // contact.id = uuidv4();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const resp = await axios.post('/api/contacts', contact, config);
            // console.log(resp);
            dispatch({ type: ADD_CONTACT, payload: resp.data.contact });
        } catch (error) {
            // console.log(error.response);
            // console.log(error.response.data.errors[0].msg);
            // console.log(error.response.data.errors.length);
            if (error.response.data.errors) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
            } else if (error.response.data.message) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
            } else if (error.response.data) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data });
            } else if (error.response) {
                dispatch({ type: CONTACT_ERROR, payload: error.response });
            } else if (error) {
                dispatch({ type: CONTACT_ERROR, payload: error });
            }
        }
    }

    // Delete contact
    const deleteContact = async (id) => {
        try {
            // const resp = await axios.delete('/api/contacts/' + `${id}`);
            await axios.delete(`/api/contacts/${id}`);
            dispatch({ type: DELETE_CONTACT, payload: id });
        } catch (error) {
            console.log(error.response);
            if (error.response.data.errors) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
            } else if (error.response.data.message) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
            } else if (error.response.data) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data });
            } else if (error.response) {
                dispatch({ type: CONTACT_ERROR, payload: error.response });
            } else if (error) {
                dispatch({ type: CONTACT_ERROR, payload: error });
            }
        }
        
    }

    // Set current contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update contact
    const updateContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const resp = await axios.put(`/api/contacts/${contact._id}`, contact, config);
            // console.log(resp);
            dispatch({ type: UPDATE_CONTACT, payload: resp.data });
        } catch (error) {
            // console.log(error.response);
            // console.log(error.response.data.errors[0].msg);
            // console.log(error.response.data.errors.length);
            if (error.response.data.errors) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
            } else if (error.response.data.message) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
            } else if (error.response.data) {
                dispatch({ type: CONTACT_ERROR, payload: error.response.data });
            } else if (error.response) {
                dispatch({ type: CONTACT_ERROR, payload: error.response });
            } else if (error) {
                dispatch({ type: CONTACT_ERROR, payload: error });
            }
        }
    }

    // Filter contacts
    const filterContacts = (text) => dispatch({ type: FILTER_CONTACTS, payload: text });

    // Clear Filter
    const clearFilter = () => dispatch({ type: CLEAR_FILTER });

    // Clear contacts
    const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });

    return (
        <ContactContext.Provider 
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                loading: state.loading,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
                getContacts,
                clearContacts,
                clearErrors
            }}
        >
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState;
