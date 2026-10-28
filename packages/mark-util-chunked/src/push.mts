/**
 * @file push
 * @module mark-util-chunked/push
 */

import splice from './splice.mts'

/**
 * Append items to the end of `list`.
 *
 * Items are added in batches to prevent V8 from hanging.\
 * When `list` is empty, `items` is returned to prevent a potentially
 * expensive operation.
 *
 * @template {any} T
 *  The list item type
 *
 * @this {void}
 *
 * @param {T[]} list
 *  The list to operate on
 * @param {T[]} items
 *  The items to inject into `list`
 * @return {T[]}
 *  `items` when `list` is empty, `list` with appended items otherwise
 */
function push<T>(this: void, list: T[], items: T[]): T[] {
  if (!list.length) return items
  return splice(list, list.length, 0, items), list
}

export default push
