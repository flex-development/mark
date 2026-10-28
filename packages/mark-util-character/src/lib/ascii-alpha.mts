/**
 * @file asciiAlpha
 * @module mark-util-character/lib/asciiAlpha
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An ***ASCII alpha*** is an ASCII upper alpha or ASCII lower alpha.\
 * An ***ASCII upper alpha*** is a character in the inclusive range `U+0041`
 * (`A`) to `U+005A` (`Z`).\
 * An ***ASCII lower alpha*** is a character in the inclusive range `U+0061`
 * (`a`) to `U+007A` (`z`).
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
const asciiAlpha: CodeCheck = checker(/[A-Za-z]/)

export default asciiAlpha
