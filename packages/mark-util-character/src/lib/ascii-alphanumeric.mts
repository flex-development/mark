/**
 * @file asciiAlphanumeric
 * @module mark-util-character/lib/asciiAlphanumeric
 */

import type { Code, CodeCheck } from '@flex-development/mark/parse'
import checker from './checker.mts'

/**
 * Check whether a character code represents an ASCII alphanumeric (`a` through
 * `z`, case insensitive, or `0` through `9`).
 *
 * An ***ASCII alphanumeric*** is an ASCII digit (see {@linkcode asciiDigit}) or
 * ASCII alpha (see {@linkcode asciiAlpha})
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
const asciiAlphanumeric: CodeCheck = checker(/[\dA-Za-z]/)

export default asciiAlphanumeric
