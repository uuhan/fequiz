// add some state
import { ADD_ITEM } from './actions';

export function items(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            state.push(action.item);
            return state;
        default:
            return state;
    }
}
