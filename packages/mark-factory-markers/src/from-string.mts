/**
 * @file fromString
 * @module mark-factory-markers/fromString
 */

import { checker } from '@flex-development/mark-util-character'
import type { MarkerSequence } from '@flex-development/mark/parse'

/**
 * Create a marker sequence from a string.
 *
 * @see {@linkcode MarkerSequence}
 *
 * @this {void}
 *
 * @param {string} string
 *  The string to convert
 * @return {MarkerSequence}
 *  The marker sequence
 */
function fromString(this: void, string: string): MarkerSequence {
  return [...string].map(ch => ({ code: checker(ch) })) as MarkerSequence
}

export default fromString
