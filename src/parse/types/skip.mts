/**
 * @file Type Aliases - Skip
 * @module mark/parse/types/Skip
 */

import type { Place, SkipInfo } from '@flex-development/mark/parse'

/**
 * Move `place` a bit forward.
 *
 * @see {@linkcode Place}
 * @see {@linkcode SkipInfo}
 *
 * @this {void}
 *
 * @param {Place} point
 *  The current point in the content
 * @param {SkipInfo} info
 *  Info about the skip
 * @return {undefined}
 */
type Skip = (this: void, point: Place, info: SkipInfo) => undefined

export type { Skip as default }
