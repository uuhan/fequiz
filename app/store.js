import { createStore, applyMiddleware, combineReducers }    from 'redux';
import thunk                                                from 'redux-thunk';
import * as reducer                                         from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function storeConfig(initial) {
    const store = createStoreWithMiddleware(combineReducers({
        ...reducer,
    }), initial);

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextReducer = require('./reducer');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
