// add some state
import { combineReducers } from 'redux';
import { ADD_ITEM } from './actions';

function items(state={}, action) {
    switch (action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, {
                item: action.item
            })

        default:
            return state;
    }
}

const reducer = combineReducers({
    items: items
})

export default reducer;
