/**
 * @file Type Aliases - Preprocess
 * @module mark/ast/types/Preprocess
 */

import type { Context, Tree } from '@flex-development/mark/ast'
import type { Event } from '@flex-development/mark/parse'

/**
 * Prepare `events` and the initial `tree` before compilation begins.
 *
 * This hook can inspect or mutate `events`, initialize compiler data,
 * or manipulate the initial `tree` before event handlers run.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Event}
 * @see {@linkcode Tree}
 *
 * @this {Context}
 *
 * @param {Event[]} events
 *  The current list of events
 * @param {Tree} tree
 *  The current syntax tree
 * @return {null | undefined}
 */
type Preprocess = (
  this: Context,
  events: Event[],
  tree: Tree
) => null | undefined

export type { Preprocess as default }
