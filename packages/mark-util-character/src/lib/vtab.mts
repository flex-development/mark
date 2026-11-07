/**
 * @file vtab
 * @module mark-util-character/lib/vtab
 */

import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` represents a vertical tab.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is typeof codes.vt}
 *  Whether `code` is {@linkcode codes.vt}
 */
function vtab(this: void, code: unknown): code is typeof codes.vt {
  return code === codes.vt
}

export default vtab
