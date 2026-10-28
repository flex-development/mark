/**
 * @file Type Aliases - Postprocess
 * @module mark/ast/types/Postprocess
 */

import type { Context, Tree } from '@flex-development/mark/ast'
import type { Event } from '@flex-development/mark/parse'

/**
 * Handle the final `tree` before transforms are applied.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Event}
 * @see {@linkcode Tree}
 *
 * @this {Context}
 *
 * @param {Tree} tree
 *  The syntax tree
 * @param {Event[]} events
 *  The list of events
 * @return {null | undefined | void}
 *  Nothing
 */
type Postprocess = (
  this: Context,
  tree: Tree,
  events: Event[]
) => null | undefined | void

export type { Postprocess as default }
