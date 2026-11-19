/**
 * @file Nodes - ValueSeparator
 * @module examples/jack/ast/nodes/ValueSeparator
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with value separators.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ValueSeparatorData extends Data {}

/**
 * An array item or object member separator.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface ValueSeparator extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ValueSeparatorData}
   *
   * @override
   */
  data?: ValueSeparatorData | undefined

  /**
   * Within an array or object expression, whether the separator is trailing.
   */
  trailing?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'valueSeparator'
}

export type { ValueSeparator as default, ValueSeparatorData }
