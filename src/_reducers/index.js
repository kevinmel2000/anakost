import { combineReducers } from 'redux';
import ListDorm from './ListDorm'

const appReducer = combineReducers({
    ListDorm : ListDorm
});

export default appReducer;