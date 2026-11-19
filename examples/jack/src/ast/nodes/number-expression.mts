/**
 * @file Nodes - NumberExpression
 * @module examples/jack/ast/nodes/NumberExpression
 */

import type {
  Data,
  Operand,
  Parent,
  SignOperator,
  UnsignedNumber
} from '@flex-development/jack/ast'

/**
 * Info associated with number expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NumberExpressionData extends Data {}

/**
 * A number expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface NumberExpression extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode Operand}
   * @see {@linkcode SignOperator}
   * @see {@linkcode UnsignedNumber}
   *
   * @override
   */
  children: [SignOperator, Operand] | [SignOperator] | [UnsignedNumber]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NumberExpressionData}
   *
   * @override
   */
  data?: NumberExpressionData | undefined

  /**
   * Whether the expression is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'numberExpression'
}

export type { NumberExpression as default, NumberExpressionData }
