/**
 * @file Internal - list
 * @module mark-util-combine-extensions/internal/list
 */

import type { ToList } from '@flex-development/mark/core'

/**
 * Convert `value` to a list.
 *
 * @internal
 *
 * @template {any} T
 *  The value to convert
 *
 * @this {void}
 *
 * @param {T} value
 *  The value to convert
 * @return {ToList<T>}
 *  The `value` if it's an array, a new array if `value` is a `Set`,
 *  or an array containing `value`
 */
function list<T>(this: void, value: T): ToList<T> {
  if (value instanceof Set) return [...value] as ToList<T>
  if (Array.isArray(value)) return value as ToList<T>
  return [value] as ToList<T>
}

export default list
