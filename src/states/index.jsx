import { combineReducers } from 'redux'
 import scrollReducer from './scroll/index'
 import ModelReducer from './model/index';
 import stateCard from './slider/index';

export default combineReducers({
    scrollReducer,
    ModelReducer,
    stateCard,
})