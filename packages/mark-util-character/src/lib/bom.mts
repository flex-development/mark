/**
 * @file bom
 * @module mark-util-character/lib/bom
 */

import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` is the byte order mark (BOM) code.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is typeof codes.bom}
 *  Whether `code` is {@linkcode codes.bom}
 */
function bom(this: void, code: unknown): code is typeof codes.bom {
  return code === codes.bom
}

export default bom
