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

export default (state, action) => {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload ], // state is immutable. create a new copy and edit that.
                loading: false
            };
        case DELETE_CONTACT:
            // const cont = state.contacts.filter(contact => contact.id !== action.payload)
            // return {
            //     ...state,
            //     contacts: [ ...cont ]
            // };
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload),
                // Callback is a predicate, to test each element of the array. Return true to keep the element, false otherwise.
                loading: false
            };
        case CLEAR_CONTACTS:
            return {
                ...state,
                contacts: null,
                filtered: null,
                error: null,
                current: null
            }
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
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact ),
                /* same as writing:
                 if (contact.id === action.payload.id) {
                    return action.payload;
                } else {
                    return contact;
                } 
                Each time callback executes, the returned value is added to new_array.
                */
                loading: false
            }
        case FILTER_CONTACTS:
            // console.log(action.payload);
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(action.payload, 'gi');
                    return contact.name.match(regex) || regex.test(contact.email);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case CONTACT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}