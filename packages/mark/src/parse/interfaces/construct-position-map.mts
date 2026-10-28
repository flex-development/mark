/**
 * @file Interfaces - ConstructPositionMap
 * @module mark/parse/interfaces/ConstructPositionMap
 */

import type { ConstructRecord } from '@flex-development/mark/parse'

/**
 * Registry of construct positions.
 *
 * Positions determine whether a construct,
 * when in a {@linkcode ConstructRecord}, takes precedence over existing
 * constructs for the same character code when merged.
 *
 * This interface can be augmented to register custom positions.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface ConstructPositionMap {
 *      beforeAll: 'beforeAll'
 *    }
 *  }
 */
interface ConstructPositionMap {
  /**
   * Add the construct after existing constructs.
   */
  after: 'after'

  /**
   * Add the construct before existing constructs.
   */
  before: 'before'
}

export type { ConstructPositionMap as default }
