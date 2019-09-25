import { combineReducers } from 'redux';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({ sample, loading });

export default rootReducer;
