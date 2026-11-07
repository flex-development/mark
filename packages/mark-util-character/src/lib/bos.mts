/**
 * @file bos
 * @module mark-util-character/lib/bos
 */

import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` is the beginning-of-stream code.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is typeof codes.bos}
 *  Whether `code` is {@linkcode codes.bos}
 */
function bos(this: void, code: unknown): code is typeof codes.bos {
  return code === codes.bos
}

export default bos
