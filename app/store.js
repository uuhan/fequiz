import { createStore, applyMiddleware, combineReducers }    from 'redux';
import thunk                                                from 'redux-thunk';
import reducer                                              from './reducer';

let activeStore;
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function storeConfig(initial) {
    const targetReducer = reducer;
    const store = createStoreWithMiddleware(combineReducers({
        ...targetReducer,
        routing: routerReducer
    }), initial);

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextReducer = require('./reducer');
            store.replaceReducer(nextReducer);
        });
    }
    activeStore = store;
    return store;
}

export function getActiveStore() {
    return activeStore;
}
