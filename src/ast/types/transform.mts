/**
 * @file Type Aliases - Transform
 * @module mark/ast/types/Transform
 */

import type { Tree } from '@flex-development/mark/ast'

/**
 * Transform a syntax `tree`.
 *
 * > 👉 **Note**: Returning `null` or `undefined` will preserve `tree`.
 *
 * @see {@linkcode Tree}
 *
 * @this {void}
 *
 * @param {Tree} tree
 *  The tree to transform
 * @return {Tree | null | undefined | void}
 *  The new or transformed tree, or nothing (in which case `tree` is used)
 */
type Transform = (this: void, tree: Tree) => Tree | null | undefined | void

export type { Transform as default }
