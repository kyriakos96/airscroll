import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import TestPlayInteractions from './TestPlayInteractions'

const reducers = combineReducers ({
    routing: routerReducer,
    settings: Settings,
    testPlayInteractions: TestPlayInteractions

});

export default reducers;
