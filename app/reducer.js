// add some state
import { ADD_ITEM, PATCH_ITEM } from './actions';

export function items(state = [], action) {
    switch (action.type) {
        // push a new item
        case ADD_ITEM: {
            return [...state, action.item];
        }

        // patch an existing item
        case PATCH_ITEM: {
            const { k, item } = action;
            state[k] = item;
            return [...state];
        }

        default:
            return state;
    }
}
