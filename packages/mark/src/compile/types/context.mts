/**
 * @file Type Aliases - Context
 * @module mark/compile/types/Context
 */

import type { CompileContext, ContextMap } from '@flex-development/mark/compile'
import type { IfNever } from '@flex-development/mark/core'

/**
 * Union of registered compilation contexts.
 *
 * To register custom contexts, augment {@linkcode ContextMap}.\
 * They will be added to this union automatically.
 */
type Context = IfNever<
  keyof ContextMap,
  CompileContext,
  ContextMap[keyof ContextMap]
>

export type { Context as default }
