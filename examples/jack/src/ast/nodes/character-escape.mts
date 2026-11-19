/**
 * @file Nodes - CharacterEscape
 * @module examples/jack/ast/nodes/CharacterEscape
 */

import type {
  CharacterEscapeValue,
  Data,
  EscapeMarker,
  Parent
} from '@flex-development/jack/ast'

/**
 * Info associated with character escape sequences.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CharacterEscapeData extends Data {}

/**
 * A character escape sequence.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CharacterEscape extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode CharacterEscapeValue}
   * @see {@linkcode EscapeMarker}
   *
   * @override
   */
  children: [EscapeMarker, CharacterEscapeValue]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CharacterEscapeData}
   *
   * @override
   */
  data?: CharacterEscapeData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'characterEscape'
}

export type { CharacterEscapeData, CharacterEscape as default }
