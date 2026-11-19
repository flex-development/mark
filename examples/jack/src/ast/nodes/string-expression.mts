/**
 * @file Nodes - StringExpression
 * @module examples/jack/ast/nodes/StringExpression
 */

import type {
  Data,
  Parent,
  StringContent,
  StringMarker
} from '@flex-development/jack/ast'

/**
 * Info associated with string expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface StringExpressionData extends Data {}

/**
 * A string expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface StringExpression extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode StringContent}
   * @see {@linkcode StringMarker}
   *
   * @override
   */
  children:
    | [StringMarker, ...StringContent[], StringMarker]
    | [StringMarker, ...StringContent[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode StringExpressionData}
   *
   * @override
   */
  data?: StringExpressionData | undefined

  /**
   * Whether the expression is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'stringExpression'
}

export type { StringExpression as default, StringExpressionData }
