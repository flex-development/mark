/**
 * @file Nodes - Whitespace
 * @module examples/jack/ast/nodes/Whitespace
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with whitespace.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface WhitespaceData extends Data {}

/**
 * Arbitrary whitespace.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface Whitespace extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode WhitespaceData}
   *
   * @override
   */
  data?: WhitespaceData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'whitespace'

  /**
   * The serialized whitespace.
   *
   * @override
   */
  value: string
}

export type { Whitespace as default, WhitespaceData }
