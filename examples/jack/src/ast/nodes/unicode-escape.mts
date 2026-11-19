/**
 * @file Nodes - UnicodeEscape
 * @module examples/jack/ast/nodes/UnicodeEscape
 */

import type {
  CharacterEscape,
  Data,
  Parent,
  UnicodeEscapeValue
} from '@flex-development/jack/ast'

/**
 * Info associated with unicode escape sequences.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnicodeEscapeData extends Data {}

/**
 * A unicode escape sequence.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface UnicodeEscape extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode CharacterEscape}
   * @see {@linkcode UnicodeEscapeValue}
   *
   * @override
   */
  children: [CharacterEscape, UnicodeEscapeValue] | [CharacterEscape]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnicodeEscapeData}
   *
   * @override
   */
  data?: UnicodeEscapeData | undefined

  /**
   * Whether the escape sequence is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'unicodeEscape'
}

export type { UnicodeEscape as default, UnicodeEscapeData }
