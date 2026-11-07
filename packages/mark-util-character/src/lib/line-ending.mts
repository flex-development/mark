/**
 * @file lineEnding
 * @module mark-util-character/lib/lineEnding
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
 *  Whether `code` is a line ending code
 */
function lineEnding(this: void, code: unknown): code is LineEnding {
  switch (code) {
    case codes.carriageReturn:
    case codes.carriageReturnLineFeed:
    case codes.cr:
    case codes.lf:
    case codes.lineFeed:
    case codes.ls:
    case codes.ps:
      return true
    default:
      return false
  }
}

export default lineEnding
