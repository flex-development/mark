/**
 * @file Nodes - Break
 * @module examples/jack/ast/nodes/Break
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with line breaks.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface BreakData extends Data {}

/**
 * A line break.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Break extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BreakData}
   *
   * @override
   */
  data?: BreakData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'break'
}

export type { BreakData, Break as default }
