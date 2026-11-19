/**
 * @file Type Aliases - CodeCheck
 * @module mark/parse/types/CodeCheck
 */

/**
 * Check a character `code`.
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The character code to check
 * @return {boolean}
 *  Whether `code` passes the test
 */
type CodeCheck = (this: void, code: unknown) => boolean

export type { CodeCheck as default }
