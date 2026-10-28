/**
 * @file Type Aliases - Tree
 * @module mark/ast/types/Tree
 */

import type { Node, NodeMap, Root } from '@flex-development/mark/ast'

/**
 * A syntax tree.
 *
 * Resolves to `never` unless a {@linkcode Root}-shaped node is registered.
 * To register a custom root, augment {@linkcode NodeMap}.
 *
 * @see {@linkcode Node}
 * @see {@linkcode Root}
 */
type Tree = Extract<Node, Root>

export type { Tree as default }
