/**
 * @file asciiDigit
 * @module mark-util-character/lib/asciiDigit
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents an ASCII digit (`0` through `9`).
 *
 * An ***ASCII digit*** is a character in the inclusive range `U+0030` (`0`) to
 * `U+0039` (`9`).
 *
 * @see {@linkcode CodeCheck}
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  Whether the character code matches
 */
const asciiDigit: CodeCheck = checker(/\d/)

export default asciiDigit
