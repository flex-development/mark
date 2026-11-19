/**
 * @file Interfaces - NamedConstruct
 * @module mark/parse/interfaces/NamedConstruct
 */

import type { Construct, ConstructName } from '@flex-development/mark/parse'

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
   * @see {@linkcode ConstructName}
   *
   * @override
   */
  name: ConstructName
}

export type { NamedConstruct as default }
