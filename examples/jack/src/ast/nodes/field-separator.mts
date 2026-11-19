/**
 * @file Nodes - FieldSeparator
 * @module examples/jack/ast/nodes/FieldSeparator
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with object field separators.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FieldSeparatorData extends Data {}

/**
 * An object field separator.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface FieldSeparator extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FieldSeparatorData}
   *
   * @override
   */
  data?: FieldSeparatorData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'fieldSeparator'
}

export type { FieldSeparator as default, FieldSeparatorData }
