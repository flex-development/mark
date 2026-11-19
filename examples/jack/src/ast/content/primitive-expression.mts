/**
 * @file Content - primitiveExpression
 * @module examples/jack/ast/content/primitiveExpression
 */

import type {
  BooleanExpression,
  NullExpression,
  NumberExpression,
  StringExpression
} from '@flex-development/jack/ast'

/**
 * Union of registered jack nodes that can occur where a primitive expression
 * is expected.
 *
 * To register custom nodes, augment {@linkcode PrimitiveExpressionMap}.
 * They will be added to this union automatically.
 */
type PrimitiveExpression = PrimitiveExpressionMap[keyof PrimitiveExpressionMap]

/**
 * Registry of nodes that can occur where a {@linkcode PrimitiveExpression}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack/ast' {
 *    interface PrimitiveExpressionMap {
 *      custom: CustomNode
 *    }
 *  }
 */
interface PrimitiveExpressionMap {
  booleanExpression: BooleanExpression
  nullExpression: NullExpression
  numberExpression: NumberExpression
  stringExpression: StringExpression
}

export type { PrimitiveExpression, PrimitiveExpressionMap }
