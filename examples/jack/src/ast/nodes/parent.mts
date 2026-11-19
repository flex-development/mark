/**
 * @file Nodes - Parent
 * @module examples/jack/ast/nodes/Parent
 */

import type { Child, Node } from '@flex-development/jack/ast'

/**
 * An abstract node containing other nodes.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Parent extends Node {
  /**
   * The list of children.
   *
   * @see {@linkcode Child}
   */
  children: Child[]
}

export type { Parent as default }
