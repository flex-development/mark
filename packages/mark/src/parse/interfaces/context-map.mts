/**
 * @file Interfaces - ContextMap
 * @module mark/parse/interfaces/ContextMap
 */

/**
 * Registry of tokenization contexts.
 *
 * This interface can be augmented to register custom contexts.
 * Libraries extending `mark` must register the context they create.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface ContextMap {
 *      docmark: docmark.TokenizeContext
 *    }
 *  }
 */
interface ContextMap {}

export type { ContextMap as default }
