/**
 * @file Content - expression
 * @module examples/jack/content/expression
 */

import type {
  ArrayExpression,
  ObjectExpression,
  PrimitiveExpressionMap
} from '@flex-development/jack/ast'

/**
 * Union of registered jack nodes that can occur where an expression
 * is expected.
 *
 * To register custom jack nodes, augment {@linkcode ExpressionMap}.\
 * They will be added to this union automatically.
 */
type Expression = ExpressionMap[keyof ExpressionMap]

/**
 * Registry of jack nodes that can occur where an {@linkcode Expression}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack' {
 *    interface ExpressionMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @see {@linkcode PrimitiveExpressionMap}
 *
 * @extends {PrimitiveExpressionMap}
 */
interface ExpressionMap extends PrimitiveExpressionMap {
  arrayExpression: ArrayExpression
  objectExpression: ObjectExpression
}

export type { Expression, ExpressionMap }
