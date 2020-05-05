import {
    ADD_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CURRENT,
    SET_CURRENT,
    UPDATE_CONTACT,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload ] // state is immutable. create a new copy and edit that.
            };
        case DELETE_CONTACT:
            // const cont = state.contacts.filter(contact => contact.id !== action.payload)
            // return {
            //     ...state,
            //     contacts: [ ...cont ]
            // };
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        default:
            return state;
    }
}