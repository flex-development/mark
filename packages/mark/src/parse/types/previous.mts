/**
 * @file Type Aliases - Previous
 * @module mark/parse/types/Previous
 */

import type { Code, Context } from '@flex-development/mark/parse'

/**
 * Check if the previous character `code` can precede a construct.
 *
 * > 👉 **Note**: A construct can hook into many potential start characters.
 * > Instead of setting up an attempt to parse that construct for most
 * > characters, this is a speedy way to reduce that.
 *
 * @see {@linkcode Code}
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @param {Code} code
 *  The previous character code
 * @return {boolean}
 *  Whether `code` is allowed before the construct
 */
type Previous = (this: Context, code: Code) => boolean

export type { Previous as default }
