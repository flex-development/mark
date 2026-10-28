/**
 * @file checker
 * @module mark-util-character/lib/checker
 */

import LARGEST_CODE_POINT from '#internal/largest-code-point'
import type { Serialize } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type { Code, CodeCheck } from '@flex-development/mark/parse'

export default checker

/**
 * Create a code check, i.e. guard, from a regular expression.
 *
 * After serializing a character code, the guard will check if the character
 * matches the bound regex.
 *
 * @see {@linkcode CodeCheck}
 *
 * @this {void}
 *
 * @param {RegExp | string} test
 *  The regular expression or regular expression pattern
 * @param {Serialize | null | undefined} [serialize]
 *  Serialize a character code
 * @return {CodeCheck}
 *  The code check
 */
function checker(
  this: void,
  test: RegExp | string,
  serialize?: Serialize | null | undefined
): CodeCheck {
  return check.bind(typeof test === 'string' ? new RegExp(test) : test)

  /**
   * Check whether `codes` matches the bound regex.
   *
   * @this {RegExp}
   *  The regular expression to match against
   *
   * @param {Code} code
   *  The character code
   * @return {boolean}
   *  Whether the character code matches the bound regex
   */
  function check(this: RegExp, code: Code): boolean {
    // check custom serialized code point.
    if (serialize) return this.test(serialize(code))

    // possible eos code, or virtual code.
    if (typeof code !== 'number' || code <= codes.vs) return false

    // invalid code point.
    if (Number.isNaN(code)) return false

    // greater than largest value returned by `codePointAt`.
    if (code > LARGEST_CODE_POINT) return false

    // check valid code point.
    return this.test(String.fromCodePoint(code))
  }
}
