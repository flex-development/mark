/**
 * @file Type Aliases - CreateExtensions
 * @module mark/ast/types/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  ExtensionList,
  Opener
} from '@flex-development/mark/ast'

/**
 * Create an extension or an extension list.
 *
 * @see {@linkcode Buffer}
 * @see {@linkcode Closer}
 * @see {@linkcode Extension}
 * @see {@linkcode ExtensionList}
 * @see {@linkcode Opener}
 *
 * @this {void}
 *
 * @param {Opener} opener
 *  Create an `enter` event handler
 * @param {Closer} closer
 *  Create an `exit` event handler
 * @param {Buffer} buffer
 *  Start capturing output into a temporary compilation value
 * @return {Extension | ExtensionList}
 *  The extension, or the list of extensions
 */
type CreateExtensions = (
  this: void,
  opener: Opener,
  closer: Closer,
  buffer: Buffer
) => Extension | ExtensionList

export type { CreateExtensions as default }
