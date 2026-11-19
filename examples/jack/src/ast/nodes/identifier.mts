/**
 * @file Nodes - Identifier
 * @module examples/jack/ast/nodes/Identifier
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with identifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IdentifierData extends Data {}

/**
 * An identifier.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Identifier extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IdentifierData}
   *
   * @override
   */
  data?: IdentifierData | undefined

  /**
   * The identifier text.
   */
  name: string

  /**
   * The node type.
   *
   * @override
   */
  type: 'identifier'
}

export type { Identifier as default, IdentifierData }
