/**
 * @file Nodes - HexEscape
 * @module examples/jack/ast/nodes/HexEscape
 */

import type {
  CharacterEscape,
  Data,
  HexEscapeValue,
  Parent
} from '@flex-development/jack/ast'

/**
 * Info associated with hexadecimal escape sequences.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface HexEscapeData extends Data {}

/**
 * A hexadecimal escape sequence.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface HexEscape extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode CharacterEscape}
   * @see {@linkcode HexEscapeValue}
   *
   * @override
   */
  children: [CharacterEscape, HexEscapeValue] | [CharacterEscape]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode HexEscapeData}
   *
   * @override
   */
  data?: HexEscapeData | undefined

  /**
   * Whether the escape sequence is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'hexEscape'
}

export type { HexEscape as default, HexEscapeData }
