import { combineReducers } from 'redux';
import dorm from './dorm';

const appReducer = combineReducers({
    dorm : dorm
});

export default appReducer;