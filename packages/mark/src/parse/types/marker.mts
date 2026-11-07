/**
 * @file Type Aliases - Marker
 * @module mark/parse/types/Marker
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * A character code representing a syntactical marker.
 *
 * @see {@linkcode Code}
 */
type Marker = NonNullable<Code>

export type { Marker as default }
