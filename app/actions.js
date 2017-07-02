// define some actions for our page
// TODO: more actions
export const ADD_ITEM = 'ADD_ITEM';
export const PATCH_ITEM = 'PATCH_ITEM';

/**
 * addItem: action to add new article
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

/**
 * patchItem: action to patch item of index k
 *
 * @export
 * @param {any} k: index number
 * @param {any} item: new value to patch
 * @returns {type, k, item}
 */
export function patchItem(k, item) {
    return {
        type: PATCH_ITEM,
        k,
        item
    };
}