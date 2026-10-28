/**
 * @file Interfaces - NamedConstruct
 * @module mark/parse/interfaces/NamedConstruct
 */

import type { Construct } from '@flex-development/mark/parse'

/**
 * A construct with a name.
 *
 * @see {@linkcode Construct}
 *
 * @extends {Construct}
 */
interface NamedConstruct extends Construct {
  /**
   * The name of the construct.
   *
   * @override
   */
  name: string
}

export type { NamedConstruct as default }
