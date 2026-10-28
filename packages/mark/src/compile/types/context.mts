/**
 * @file Type Aliases - Context
 * @module mark/compile/types/Context
 */

import type { ContextMap } from '@flex-development/mark/compile'

/**
 * Union of registered compilation contexts.
 *
 * To register custom contexts, augment {@linkcode ContextMap}.\
 * They will be added to this union automatically.
 */
type Context = ContextMap[keyof ContextMap]

export type { Context as default }
