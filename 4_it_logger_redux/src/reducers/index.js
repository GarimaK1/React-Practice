// This is the rootReducer file.
// Combine all other reducers here.
import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
    log: logReducer
});