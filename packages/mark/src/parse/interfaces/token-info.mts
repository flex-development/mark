/**
 * @file Interfaces - TokenInfo
 * @module mark/parse/interfaces/TokenInfo
 */

import type { Position, TokenFields } from '@flex-development/mark/parse'

/**
 * Information related to a token.
 *
 * @see {@linkcode Position}
 * @see {@linkcode TokenFields}
 *
 * @extends {Position}
 * @extends {TokenFields}
 */
interface TokenInfo extends Position, TokenFields {}

export type { TokenInfo as default }
