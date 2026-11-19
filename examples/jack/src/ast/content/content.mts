/**
 * @file Content - content
 * @module examples/jack/ast/content/content
 */

import type {
  ArrayContent,
  ObjectContent,
  RootContent,
  StringContent
} from '@flex-development/jack/ast'

/**
 * Union of registered content model nodes.
 *
 * Nodes are grouped by content type, if applicable.
 * Each node in `jack` falls into one or more categories of `Content`.
 *
 * @see {@linkcode ArrayContent}
 * @see {@linkcode ObjectContent}
 * @see {@linkcode RootContent}
 * @see {@linkcode StringContent}
 */
type Content = ArrayContent | ObjectContent | RootContent | StringContent

export type { Content as default }
