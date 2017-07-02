// define some actions for our page
// TODO: more actions
const ADD_ITEM = 'ADD_ITEM';

/**
 * addItem: add new article
 *
 * @export
 * @param {any} item{url, title, content} TODO: type check
 * @returns {type, item}
 */
export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    };
}
