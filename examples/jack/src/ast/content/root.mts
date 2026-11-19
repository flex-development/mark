/**
 * @file Content - root
 * @module examples/jack/ast/content/root
 */

import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  LinePrefix,
  UnexpectedValue,
  Whitespace
} from '@flex-development/jack/ast'

/**
 * Union of registered jack nodes that can occur where source file content
 * is expected.
 *
 * To register custom jack nodes, augment {@linkcode RootContentMap}.\
 * They will be added to this union automatically.
 */
type RootContent = RootContentMap[keyof RootContentMap]

/**
 * Registry of jack nodes that can occur where {@linkcode RootContent}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack/ast' {
 *    interface RootContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @see {@linkcode ExpressionMap}
 *
 * @extends {ExpressionMap}
 */
interface RootContentMap extends ExpressionMap {
  break: Break
  comment: Comment
  linePrefix: LinePrefix
  whitespace: Whitespace
  unexpectedValue: UnexpectedValue
}

export type { RootContent, RootContentMap }
