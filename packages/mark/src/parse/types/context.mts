/**
 * @file Type Aliases - Context
 * @module mark/parse/types/Context
 */

import type { ContextMap } from '@flex-development/mark/parse'

/**
 * Union of registered tokenization contexts.
 *
 * To register custom contexts, augment {@linkcode ContextMap}.\
 * They will be added to this union automatically.
 */
type Context = ContextMap[keyof ContextMap]

export type { Context as default }
