// add some state
import { ADD_ITEM } from './actions';

export function items(state={}, action) {
    switch (action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, {
                item: action.item
            })

        default:
            return state;
    }
}
