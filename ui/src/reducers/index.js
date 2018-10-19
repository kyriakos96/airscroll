import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TestPlayInteractions from './TestPlayInteractions'

const reducers = combineReducers ({
    routing: routerReducer,
    testPlayInteractions: TestPlayInteractions

});

export default reducers;
