/**
 * @file Nodes - LinePrefix
 * @module examples/jack/ast/nodes/LinePrefix
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with line prefixes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface LinePrefixData extends Data {}

/**
 * A line prefix.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface LinePrefix extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode LinePrefixData}
   *
   * @override
   */
  data?: LinePrefixData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'linePrefix'
}

export type { LinePrefix as default, LinePrefixData }
