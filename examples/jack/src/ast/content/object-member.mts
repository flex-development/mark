/**
 * @file Content - objectMember
 * @module examples/jack/ast/content/objectMember
 */

import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  FieldSeparator,
  LinePrefix,
  Whitespace
} from '@flex-development/jack/ast'

/**
 * Union of registered jack nodes that can occur where object member content
 * is expected.
 *
 * To register custom nodes, augment {@linkcode ObjectMemberContentMap}.\
 * They will be added to this union automatically.
 */
type ObjectMemberContent = ObjectMemberContentMap[keyof ObjectMemberContentMap]

/**
 * Registry of nodes that can occur where {@linkcode ObjectMemberContent}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack/ast' {
 *    interface ObjectMemberContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @see {@linkcode ExpressionMap}
 *
 * @extends {ExpressionMap}
 */
interface ObjectMemberContentMap extends ExpressionMap {
  break: Break
  comment: Comment
  fieldSeparator: FieldSeparator
  linePrefix: LinePrefix
  whitespace: Whitespace
}

export type { ObjectMemberContent, ObjectMemberContentMap }
