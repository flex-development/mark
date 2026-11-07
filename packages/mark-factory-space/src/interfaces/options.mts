/**
 * @file Interfaces - Options
 * @module mark-factory-space/interfaces/Options
 */

import type {
  CodeCheck,
  State,
  TokenFields,
  TokenType
} from '@flex-development/mark/parse'

/**
 * Options for tokenizing whitespace.
 */
interface Options {
  /**
   * The token fields to apply if whitespace is encountered.
   *
   * @see {@linkcode TokenFields}
   */
  fields?: TokenFields | null | undefined

  /**
   * The maximum number of spaces/tabs to consume (exclusive).
   *
   * @default
   *  max ? max - 1 : Number.POSITIVE_INFINITY
   */
  max?: number | null | undefined

  /**
   * The failed tokenization state.
   *
   * This state is switched to when no whitespace can be captured.
   *
   * @see {@linkcode State}
   */
  nok?: State | null | undefined

  /**
   * The whitespace matcher.
   *
   * @see {@linkcode CodeCheck}
   *
   * @default import('@flex-development/mark-util-character').whitespace
   */
  test?: CodeCheck | null | undefined

  /**
   * The token type to capture whitespace as.
   *
   * If omitted, whitespace will be captured without emitting a token.
   *
   * @see {@linkcode TokenType}
   */
  type?: TokenType | null | undefined
}

export type { Options as default }
