/**
 * @file lineEndingOrWhitespace
 * @module mark-util-character/lib/lineEndingOrWhitespace
 */

import type {
  LineEnding,
  Whitespace
} from '@flex-development/mark-util-character'
import lineEnding from './line-ending.mts'
import whitespace from './whitespace.mts'

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
 *  Whether `code` is line ending or whitespace code
 */
function lineEndingOrWhitespace(
  this: void,
  code: unknown
): code is LineEnding | Whitespace {
  return lineEnding(code) || whitespace(code)
}

export default lineEndingOrWhitespace
