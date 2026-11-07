/**
 * @file Interfaces - MarkerInfo
 * @module mark/parse/interfaces/MarkerInfo
 */

import type {
  CodeCheck,
  Marker,
  TokenFields,
  TokenType
} from '@flex-development/mark/parse'

/**
 * Info about how to tokenize a {@linkcode Marker}.
 */
interface MarkerInfo {
  /**
   * The character code to consume, the character code matcher,
   * or `true` to allow any code.
   *
   * @see {@linkcode CodeCheck}
   * @see {@linkcode Marker}
   */
  code: CodeCheck | Marker | true

  /**
   * The fields to attach to the emitted token.
   *
   * @see {@linkcode TokenFields}
   */
  fields?: TokenFields | null | undefined

  /**
   * Whether the comment marker is optional.
   *
   * If `true`, an unexpected code successfully terminates the marker sequence.
   */
  optional?: boolean | null | undefined

  /**
   * The token type to emit when {@linkcode code}, or the character code matched
   * by `code`, is consumed.
   *
   * If omitted, `code` is consumed without emitting a token.
   *
   * @see {@linkcode TokenType}
   */
  type?: TokenType | null | undefined
}

export type { MarkerInfo as default }
