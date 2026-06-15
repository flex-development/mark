/**
 * @file Interfaces - ContentTypeMap
 * @module fsm/parse/interfaces/ContentTypeMap
 */

/**
 * Registry of content types.
 *
 * This interface can be augmented to register custom content types.
 *
 * @example
 *  declare module '@flex-development/fsm/parse' {
 *    interface ContentTypeMap {
 *      document: 'document'
 *      flow: 'flow'
 *      string: 'string'
 *      text: 'text'
 *    }
 *  }
 */
interface ContentTypeMap {}

export type { ContentTypeMap as default }
