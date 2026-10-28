/**
 * @file streamBreak
 * @module mark-util-character/lib/streamBreak
 */

import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` represents a stream break.
 *
 * The stream break code can be written between chunks to signal separation, or
 * a "pause" in the current stream.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is typeof codes.break}
 *  `true` if `code` is break code, `false` otherwise
 */
function streamBreak(this: void, code: unknown): code is typeof codes.break {
  return code === codes.break
}

export default streamBreak
