/**
 * @file Nodes - NulEscape
 * @module examples/jack/ast/nodes/NulEscape
 */

import type {
  Data,
  EscapeMarker,
  NulEscapeValue,
  Parent
} from '@flex-development/jack/ast'

/**
 * Info associated with nul escape sequences.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NulEscapeData extends Data {}

/**
 * A nul escape sequence.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface NulEscape extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode EscapeMarker}
   * @see {@linkcode NulEscapeValue}
   *
   * @override
   */
  children: [EscapeMarker, NulEscapeValue]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NulEscapeData}
   *
   * @override
   */
  data?: NulEscapeData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'nulEscape'
}

export type { NulEscape as default, NulEscapeData }
