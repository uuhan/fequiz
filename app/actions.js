// define some actions for our page
const ADD_ITEM = 'ADD_ITEM';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    };
}
