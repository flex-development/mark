/**
 * @file Type Aliases - CreateExtensions
 * @module fsm/compile/types/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  Opener
} from '@flex-development/fsm/compile'
import type { List } from '@flex-development/fsm/parse'

/**
 * Create an extension or a collection of extensions.
 *
 * @see {@linkcode Buffer}
 * @see {@linkcode Closer}
 * @see {@linkcode Extension}
 * @see {@linkcode List}
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
 * @return {Extension | List<Extension>}
 *  The extension, or the list of extensions
 */
type CreateExtensions = (
  this: void,
  opener: Opener,
  closer: Closer,
  buffer: Buffer
) => Extension | List<Extension>

export type { CreateExtensions as default }
