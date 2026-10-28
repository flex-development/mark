/**
 * @file Interfaces - Root
 * @module mark/ast/interfaces/Root
 */

import type unist from 'unist'

/**
 * A source document or source document fragment.
 *
 * @see {@linkcode unist.Node}
 * @see {@linkcode unist.Parent}
 *
 * @template {unist.Node} [Child]
 *  The union of child nodes
 *
 * @extends {unist.Parent}
 */
interface Root<Child extends unist.Node = unist.Node> extends unist.Parent {
  /**
   * The list of children.
   *
   * @override
   */
  children: Child[]

  /**
   * The node type.
   *
   * @override
   */
  type: 'root'
}

export type { Root as default }
