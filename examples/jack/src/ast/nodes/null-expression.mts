/**
 * @file Nodes - NullExpression
 * @module examples/jack/ast/nodes/NullExpression
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with null expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NullExpressionData extends Data {}

/**
 * A null expression.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface NullExpression extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NullExpressionData}
   *
   * @override
   */
  data?: NullExpressionData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'nullExpression'

  /**
   * The value.
   *
   * @override
   */
  value: null
}

export type { NullExpression as default, NullExpressionData }
