/**
 * @file whitespace
 * @module mark-util-character/lib/whitespace
 */

import type { Whitespace } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import space from './space.mts'

/**
 * Check if `code` represents whitespace.
 *
 * @see {@linkcode Whitespace}
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is Whitespace}
 *  `true` if `code` is whitespace code, `false` otherwise
 */
function whitespace(this: void, code: unknown): code is Whitespace {
  switch (code) {
    case codes.horizontalTab:
    case codes.ht:
      return true
    default:
      return space(code)
  }
}

export default whitespace
