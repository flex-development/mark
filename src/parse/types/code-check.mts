/**
 * @file Type Aliases - CodeCheck
 * @module mark/parse/types/CodeCheck
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * Check a character `code`.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  Whether `code` passes the test
 */
type CodeCheck = (this: void, code: Code) => boolean

export type { CodeCheck as default }
