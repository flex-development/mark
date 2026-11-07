/**
 * @file Interfaces - InitialConstructs
 * @module mark/parse/interfaces/InitialConstructs
 */

import type { InitialContent } from '@flex-development/mark/parse'

/**
 * Registry of initial constructs.
 *
 * This interface can be augmented to register custom initial constructs.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface InitialConstructs {
 *      language?: InitialConstruct
 *    }
 *  }
 *
 * @see {@linkcode InitialContent}
 *
 * @extends {InitialContent}
 */
interface InitialConstructs extends InitialContent {}

export type { InitialConstructs as default }
