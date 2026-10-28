/**
 * @file asciiHexDigit
 * @module mark-util-character/lib/asciiHexDigit
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An ***ASCII hex digit*** is an ASCII digit (see {@linkcode asciiDigit}),
 * ASCII upper hex digit, or an ASCII lower hex digit.\
 * An ***ASCII upper hex digit*** is a character in the inclusive range `U+0041`
 * (`A`) to `U+0046` (`F`).\
 * An ***ASCII lower hex digit*** is a character in the inclusive range `U+0061`
 * (`a`) to `U+0066` (`f`).
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
const asciiHexDigit: CodeCheck = checker(/[\dA-Fa-f]/)

export default asciiHexDigit
