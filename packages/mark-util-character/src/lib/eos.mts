/**
 * @file eos
 * @module mark-util-character/lib/eos
 */

import { codes } from '@flex-development/mark-util-symbol'

/**
 * Check if `code` is the end-of-stream code.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {code is typeof codes.eos}
 *  Whether `code` is {@linkcode codes.eos}
 */
function eos(this: void, code: unknown): code is typeof codes.eos {
  return code === codes.eos
}

export default eos
