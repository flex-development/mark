/**
 * @file Nodes - Literal
 * @module examples/jack/ast/nodes/Literal
 */

import type { Node } from '@flex-development/jack/ast'

/**
 * An abstract node containing a scalar value.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Literal extends Node {
  /**
   * The scalar value.
   */
  value: bigint | boolean | number | string | null | undefined
}

export type { Literal as default }
