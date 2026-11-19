/**
 * @file Nodes - SignOperator
 * @module examples/jack/ast/nodes/SignOperator
 */

import type {
  Data,
  Literal,
  SerializedSignOperator
} from '@flex-development/jack/ast'

/**
 * Info associated with sign operators.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SignOperatorData extends Data {}

/**
 * A sign operator.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface SignOperator extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SignOperatorData}
   *
   * @override
   */
  data?: SignOperatorData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'signOperator'

  /**
   * The serialized operator.
   *
   * @see {@linkcode SerializedSignOperator}
   *
   * @override
   */
  value: SerializedSignOperator
}

export type { SignOperator as default, SignOperatorData }
