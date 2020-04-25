import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import { contactReducer } from "./contactReducer";
import { 
    ADD_CONTACT, 
    DELETE_CONTACT, 
    FILTER_CONTACT, 
    CLEAR_CURRENT, 
    SET_CURRENT, 
    UPDATE_CONTACT, 
    CLEAR_FILTER 
} from '../types';

const ContactState = (props) => {
    const initialState = { 
        contacts: [
            {
                id: 1,
                name: 'GK',
                email: 'gk@gmail.com',
                phone: '111-111-1111',
                type: 'professional'
            },
            {
                id: 2,
                name: 'Basil',
                email: 'basil@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Parsley',
                email: 'parsley@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    // Delete contact

    // Set current contact

    // Clear current contact

    // Update contact

    // Filter contacts

    // Clear Filter

    return (
        <ContactContext.Provider 
            value={{
                contacts: state.contacts
            }}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState;
