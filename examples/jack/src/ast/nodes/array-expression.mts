/**
 * @file Nodes - ArrayExpression
 * @module examples/jack/ast/nodes/ArrayExpression
 */

import type {
  ArrayContent,
  ArrayMarker,
  Data,
  Parent
} from '@flex-development/jack/ast'

/**
 * Info associated with array expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrayExpressionData extends Data {}

/**
 * An array expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArrayExpression extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode ArrayContent}
   * @see {@linkcode ArrayMarker}
   *
   * @override
   */
  children:
    | [ArrayMarker, ...ArrayContent[], ArrayMarker]
    | [ArrayMarker, ...ArrayContent[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayExpressionData}
   *
   * @override
   */
  data?: ArrayExpressionData | undefined

  /**
   * Whether the expression is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * Whether the array is sparse.
   */
  sparse?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'arrayExpression'
}

export type { ArrayExpressionData, ArrayExpression as default }
