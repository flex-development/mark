/**
 * @file Nodes - UnexpectedValue
 * @module examples/jack/ast/nodes/UnexpectedValue
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with unexpected values.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnexpectedValueData extends Data {}

/**
 * An unexpected value.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface UnexpectedValue extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnexpectedValueData}
   *
   * @override
   */
  data?: UnexpectedValueData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'unexpectedValue'

  /**
   * The unexpected value.
   *
   * @override
   */
  value: string
}

export type { UnexpectedValue as default, UnexpectedValueData }
