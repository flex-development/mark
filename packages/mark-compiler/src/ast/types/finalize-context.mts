/**
 * @file Type Aliases - FinalizeContext
 * @module mark-compiler/ast/types/FinalizeContext
 */

import type { Options } from '@flex-development/mark-compiler/ast'
import type { Context } from '@flex-development/mark/ast'

/**
 * Finalize the compilation context.
 *
 * @see {@linkcode Context}
 * @see {@linkcode Options}
 *
 * @this {void}
 *
 * @param {Context} context
 *  The current compilation context
 * @param {Options} options
 *  The options used to create the compiler
 * @return {null | undefined | void}
 *  Nothing
 */
type FinalizeContext = (
  this: void,
  context: Context,
  options: Options
) => null | undefined | void

export type { FinalizeContext as default }
