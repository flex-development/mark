/**
 * @file Interfaces - Point
 * @module mark/parse/interfaces/Point
 */

import type { Column, Line, Offset } from '@flex-development/mark/parse'

/**
 * A location in the source content.
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
   * The position in the source content (`0`-indexed integer).
   *
   * @see {@linkcode Offset}
   */
  offset: Offset
}

export type { Point as default }
