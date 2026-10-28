/**
 * @file Type Aliases - Create
 * @module mark/parse/types/Create
 */

import type { Context, Point } from '@flex-development/mark/parse'

/**
 * Create a tokenization context.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Point}
 *
 * @this {void}
 *
 * @param {Point | null | undefined} [from]
 *  Where to start parsing from
 * @return {Context}
 *  The new tokenize context
 */
type Create = (this: void, from?: Point | null | undefined) => Context

export type { Create as default }
