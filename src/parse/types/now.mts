/**
 * @file Type Aliases - Now
 * @module mark/parse/types/Now
 */

import type { Place } from '@flex-development/mark/parse'

/**
 * Get the current place in the content.
 *
 * @see {@linkcode Place}
 *
 * @this {void}
 *
 * @return {Place}
 *  The current place in the content
 */
type Now = (this: void) => Place

export type { Now as default }
