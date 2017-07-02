// add some state
import { ADD_ITEM, PATCH_ITEM } from './actions';

export function items(state = [], action) {
    switch (action.type) {
        // push a new item
        case ADD_ITEM: {
            state.push(action.item);
            return state;
        }

        // patch an existing item
        case PATCH_ITEM: {
            const { k, item } = action;
            console.error(item);
            console.error(state[k]);
            state[k] = item;
            console.error(state[k]);
            return state;
        }

        default:
            return state;
    }
}
