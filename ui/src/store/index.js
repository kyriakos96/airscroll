import {applyMiddleware, compose, createStore} from "redux";
import reducers from "../reducers/index";
import ReduxPromise from 'redux-promise';

export default function configureStore() {
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    const store = createStoreWithMiddleware(reducers);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}