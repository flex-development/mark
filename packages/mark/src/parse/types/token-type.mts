/**
 * @file Type Aliases - TokenType
 * @module mark/parse/types/TokenType
 */

import type { IfNever } from '@flex-development/mark/core'
import type { TokenTypeMap } from '@flex-development/mark/parse'

/**
 * Union of registered token types.
 *
 * To register custom token types, augment {@linkcode TokenTypeMap}.\
 * They will be added to this union automatically.
 */
type TokenType = IfNever<
  keyof TokenTypeMap,
  string,
  TokenTypeMap[keyof TokenTypeMap]
>

export type { TokenType as default }
