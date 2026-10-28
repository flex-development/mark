/**
 * @file Type Aliases - Constructs
 * @module mark/parse/types/Constructs
 */

import type {
  ConstructPack,
  ConstructRecord
} from '@flex-development/mark/parse'

/**
 * A single construct, list of constructs,
 * or several constructs mapped from their initial codes.
 *
 * @see {@linkcode ConstructPack}
 * @see {@linkcode ConstructRecord}
 */
type Constructs = ConstructRecord | ConstructPack

export type { Constructs as default }
