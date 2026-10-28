/**
 * @file eol
 * @module mark-util-character/lib/eol
 */

import type { LineEnding } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` represents a line ending.
 *
 * @see {@linkcode LineEnding}
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is LineEnding}
 *  `true` if `code` is line ending code, `false` otherwise
 */
function eol(this: void, code: unknown): code is LineEnding {
  switch (code) {
    case codes.cr:
    case codes.crlf:
    case codes.lf:
    case codes.ls:
    case codes.ps:
    case codes.vcr:
    case codes.vlf:
      return true
    default:
      return false
  }
}

export default eol
