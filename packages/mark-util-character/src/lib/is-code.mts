/**
 * @file isCode
 * @module mark-util-character/lib/isCode
 */

import type { Code } from '@flex-development/mark/parse'
import eos from './eos.mts'

/**
 * Check if `value` looks like a character code.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to check
 * @return {value is Code}
 *  `true` if `value` is a number or `null`, `false` otherwise
 */
function isCode(this: void, value: unknown): value is Code {
  return typeof value === 'number' || eos(value)
}

export default isCode
