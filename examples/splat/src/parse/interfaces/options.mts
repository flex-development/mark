/**
 * @file Interfaces - Options
 * @module examples/splat/parse/interfaces/Options
 */

import type { Point } from '@flex-development/mark/parse'

/**
 * Options used for parsing glob patterns.
 */
interface Options {
  /**
   * The point before the first character in the pattern.
   *
   * @see {@linkcode Point}
   */
  from?: Point | null | undefined
}

export type { Options as default }
