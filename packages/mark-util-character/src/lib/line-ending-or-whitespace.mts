/**
 * @file lineEndingOrWhitespace
 * @module mark-util-character/lib/lineEndingOrWhitespace
 */

import type {
  LineEnding,
  Whitespace
} from '@flex-development/mark-util-character'
import lineEnding from './line-ending.mts'
import space from './whitespace.mts'

/**
 * Check if `code` represents a line ending or whitespace.
 *
 * @see {@linkcode LineEnding}
 * @see {@linkcode Whitespace}
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is LineEnding | Whitespace}
 *  `true` if `code` is line ending or whitespace code, `false` otherwise
 */
function lineEndingOrWhitespace(
  this: void,
  code: unknown
): code is LineEnding | Whitespace {
  return lineEnding(code) || space(code)
}

export default lineEndingOrWhitespace
