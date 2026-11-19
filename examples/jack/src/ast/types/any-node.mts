/**
 * @file Type Aliases - AnyNode
 * @module examples/jack/ast/types/AnyNode
 */

import type { Root } from '@flex-development/jack/ast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'

/**
 * Union of nodes that can occur in the tree.
 *
 * @see {@linkcode InclusiveDescendant}
 * @see {@linkcode Root}
 */
type AnyNode = InclusiveDescendant<Root>

export type { AnyNode as default }
