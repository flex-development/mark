/**
 * @file Interfaces - CompileValueMap
 * @module mark/compile/interfaces/CompileValueMap
 */

/**
 * Registry of event compilation values.
 *
 * Compilation values are intermediate values created while handling parser
 * events. They are typically syntax tree nodes, but can also be strings,
 * regular expression fragments, or other compiler-specific values.
 *
 * This interface can be augmented to register custom compilation values.
 *
 * @example
 *  declare module '@flex-development/mark/compile' {
 *    interface CompileValueMap {
 *      comment: docast.Comment
 *    }
 *  }
 */
interface CompileValueMap {}

export type { CompileValueMap as default }
