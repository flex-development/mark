/**
 * @file Interfaces - ConstructNameMap
 * @module mark/parse/interfaces/ConstructNameMap
 */

/**
 * Registry of construct names.
 *
 * Names determine whether a construct can be disabled.
 *
 * This interface can be augmented to register custom names.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface ConstructNameMap {
 *      posixCharacterClass: 'posixCharacterClass'
 *    }
 *  }
 */
interface ConstructNameMap {}

export type { ConstructNameMap as default }
