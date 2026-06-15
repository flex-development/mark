/**
 * @file Interfaces - Place
 * @module fsm/parse/interfaces/Place
 */

import type { Point, RangeInfo } from '@flex-development/fsm/parse'

/**
 * One place in a file, with additional chunk metadata.
 *
 * @see {@linkcode Point}
 * @see {@linkcode RangeInfo}
 *
 * @extends {Point}
 * @extends {RangeInfo}
 */
interface Place extends Point, RangeInfo {}

export type { Place as default }
