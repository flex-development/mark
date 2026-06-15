/**
 * @file Type Aliases - TokenType
 * @module fsm/parse/types/TokenType
 */

import type { TokenTypeMap } from '@flex-development/fsm/parse'

/**
 * Union of registered token types.
 *
 * To register custom token types, augment {@linkcode TokenTypeMap}.
 * They will be added to this union automatically.
 */
type TokenType = TokenTypeMap[keyof TokenTypeMap]

export type { TokenType as default }
