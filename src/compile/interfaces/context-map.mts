/**
 * @file Interfaces - ContextMap
 * @module mark/compile/interfaces/ContextMap
 */

/**
 * Registry of compilation contexts.
 *
 * This interface can be augmented to register custom contexts.
 * Libraries extending `mark` must register the context they create.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface ContextMap {
 *      docmark: docmark.CompileContext
 *    }
 *  }
 */
interface ContextMap {}

export type { ContextMap as default }
