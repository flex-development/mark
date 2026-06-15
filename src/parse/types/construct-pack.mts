/**
 * @file Type Aliases - ConstructPack
 * @module fsm/parse/types/ConstructPack
 */

import type { Construct } from '@flex-development/fsm/parse'

/**
 * A single construct or a list of constructs.
 *
 * @see {@linkcode Construct}
 */
type ConstructPack = Construct | Construct[]

export type { ConstructPack as default }
