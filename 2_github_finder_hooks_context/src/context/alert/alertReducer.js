import { SET_ALERT, REMOVE_ALERT } from '../types';

// this is the reducer. It is just a function. So exporting it as an arrow function.
// it is apparently simply returning updated state based on action.
export default (state, action) => {
    // dispatch has action/object{type, payload}
    switch(action.type) {
        case SET_ALERT:
            return action.payload;
        case REMOVE_ALERT:
            return null;
        default:
            return state;
    }
}