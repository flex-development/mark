/**
 * @file Interfaces - InitialConstruct
 * @module mark/parse/interfaces/InitialConstruct
 */

import type { Construct, Initializer } from '@flex-development/mark/parse'

/**
 * An initial construct.
 *
 * > 👉 Like a construct, but `tokenize` does not accept `ok` or `nok`.
 *
 * @see {@linkcode Construct}
 *
 * @extends {Construct}
 */
interface InitialConstruct extends Construct {
  /**
   * Set up a state machine to handle character codes streaming in.
   *
   * @see {@linkcode Initializer}
   */
  tokenize: Initializer
}

export type { InitialConstruct as default }
