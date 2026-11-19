/**
 * @file Nodes - BooleanExpression
 * @module examples/jack/ast/nodes/BooleanExpression
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with boolean expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface BooleanExpressionData extends Data {}

/**
 * A boolean expression.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface BooleanExpression extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BooleanExpressionData}
   *
   * @override
   */
  data?: BooleanExpressionData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'booleanExpression'

  /**
   * The boolean value.
   *
   * @override
   */
  value: boolean
}

export type { BooleanExpressionData, BooleanExpression as default }
