import {applyMiddleware, compose, createStore} from "redux";
import reducers from "../reducers/index";
import createHistory from "history/createHashHistory";
import {routerMiddleware} from "react-router-redux";


const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//(__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)use only for  development time

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState,
        composeEnhancers(applyMiddleware(...middlewares)));


    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
export {history};
