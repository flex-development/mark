/**
 * @file Content - array
 * @module examples/jack/ast/content/array
 */

import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  LinePrefix,
  UnexpectedValue,
  ValueSeparator,
  Whitespace
} from '@flex-development/jack/ast'

/**
 * Union of registered jack nodes that can occur where array expression content
 * is expected.
 *
 * To register custom nodes, augment {@linkcode ArrayContentMap}.\
 * They will be added to this union automatically.
 */
type ArrayContent = ArrayContentMap[keyof ArrayContentMap]

/**
 * Registry of nodes that can occur where {@linkcode ArrayContent} is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack/ast' {
 *    interface ArrayContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @see {@linkcode ExpressionMap}
 *
 * @extends {ExpressionMap}
 */
interface ArrayContentMap extends ExpressionMap {
  break: Break
  comment: Comment
  linePrefix: LinePrefix
  whitespace: Whitespace
  unexpectedValue: UnexpectedValue
  valueSeparator: ValueSeparator
}

export type { ArrayContent, ArrayContentMap }
