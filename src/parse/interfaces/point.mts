/**
 * @file Interfaces - Point
 * @module fsm/parse/interfaces/Point
 */

import type { Column, Line, Offset } from '@flex-development/unist-util-types'

/**
 * One place in a piece of source content.
 */
interface Point {
  /**
   * The column in the source content (`1`-indexed integer).
   *
   * @see {@linkcode Column}
   */
  column: Column

  /**
   * The line in the source content (`1`-indexed integer).
   *
   * @see {@linkcode Line}
   */
  line: Line

  /**
   * The index of the character in the source content (`0`-indexed integer).
   *
   * @see {@linkcode Offset}
   */
  offset: Offset
}

export type { Point as default }
