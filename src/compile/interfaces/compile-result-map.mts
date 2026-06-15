/**
 * @file Interfaces - CompileResultMap
 * @module fsm/compile/interfaces/CompileResultMap
 */

import type { Compile } from '@flex-development/fsm/compile'

/**
 * Registry of event compilation results.
 *
 * Compilation results are the values returned by {@linkcode Compile}.
 * The result is typically a syntax tree, but can also be a regular expression,
 * string, or any other compiler-specific value.
 *
 * This interface can be augmented to register custom results.
 *
 * @example
 *  declare module '@flex-development/fsm/compile' {
 *    interface CompileResultMap {
 *      tree: Root
 *    }
 *  }
 */
interface CompileResultMap {}

export type { CompileResultMap as default }
