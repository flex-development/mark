/**
 * @file Type Aliases - DefineSkip
 * @module fsm/parse/types/DefineSkip
 */

import type { Point } from '@flex-development/fsm/parse'

/**
 * Define a skip point.
 *
 * @see {@linkcode Point}
 *
 * @this {void}
 *
 * @param {Pick<Point, 'column' | 'line'>} point
 *  The skip point
 * @return {undefined}
 */
type DefineSkip = (
  this: void,
  point: Pick<Point, 'column' | 'line'>
) => undefined

export type { DefineSkip as default }
