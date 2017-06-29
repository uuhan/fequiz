import { createStore, applyMiddleware, combineReducers }    from 'redux';
import thunk                                                from 'redux-thunk';
import reducer                                              from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

console.log(reducer);

export default function storeConfig(initial) {
    const targetReducer = reducer;
    const store = createStoreWithMiddleware(combineReducers({
        ...targetReducer,
    }), initial);

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            const nextReducer = require('./reducer');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
