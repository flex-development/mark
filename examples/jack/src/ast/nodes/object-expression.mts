/**
 * @file Nodes - ObjectExpression
 * @module examples/jack/ast/nodes/ObjectExpression
 */

import type {
  Data,
  ObjectContent,
  ObjectMarker,
  Parent
} from '@flex-development/jack/ast'

/**
 * Info associated with object expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ObjectExpressionData extends Data {}

/**
 * An object expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ObjectExpression extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode ObjectContent}
   * @see {@linkcode ObjectMarker}
   *
   * @override
   */
  children:
    | [ObjectMarker, ...ObjectContent[], ObjectMarker]
    | [ObjectMarker, ...ObjectContent[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectExpressionData}
   *
   * @override
   */
  data?: ObjectExpressionData | undefined

  /**
   * Whether the expression is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'objectExpression'
}

export type { ObjectExpression as default, ObjectExpressionData }
