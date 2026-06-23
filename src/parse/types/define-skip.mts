/**
 * @file Type Aliases - DefineSkip
 * @module mark/parse/types/DefineSkip
 */

import type { Place } from '@flex-development/mark/parse'

/**
 * Define a skip point.
 *
 * Where a line starts after a prefix can be defined here.
 *
 * When the tokenizer moves after consuming a line ending corresponding to
 * the line number in the given point, the tokenizer shifts past the prefix
 * based on the column in the shifted point.
 *
 * @see {@linkcode Place}
 *
 * @this {void}
 *
 * @param {Place} point
 *  The skip point
 * @return {undefined}
 */
type DefineSkip = (this: void, point: Place) => undefined

export type { DefineSkip as default }
