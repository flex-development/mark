/**
 * @file Content - object
 * @module examples/jack/ast/content/object
 */

import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  LinePrefix,
  ObjectMember,
  UnexpectedValue,
  ValueSeparator,
  Whitespace
} from '@flex-development/jack/ast'

/**
 * Union of registered jack nodes that can occur where object expression content
 * is expected.
 *
 * To register custom nodes, augment {@linkcode ObjectContentMap}.\
 * They will be added to this union automatically.
 */
type ObjectContent = ObjectContentMap[keyof ObjectContentMap]

/**
 * Registry of nodes that can occur where {@linkcode ObjectContent} is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack/ast' {
 *    interface ObjectContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @see {@linkcode ExpressionMap}
 *
 * @extends {ExpressionMap}
 */
interface ObjectContentMap extends ExpressionMap {
  break: Break
  comment: Comment
  linePrefix: LinePrefix
  objectMember: ObjectMember
  unexpectedValue: UnexpectedValue
  valueSeparator: ValueSeparator
  whitespace: Whitespace
}

export type { ObjectContent, ObjectContentMap }
