/**
 * @file Nodes - CharacterEscapeValue
 * @module examples/jack/ast/nodes/CharacterEscapeValue
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with character escape sequence values.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CharacterEscapeValueData extends Data {}

/**
 * A character escape sequence value.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface CharacterEscapeValue extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CharacterEscapeValueData}
   *
   * @override
   */
  data?: CharacterEscapeValueData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'characterEscapeValue'

  /**
   * The escaped character.
   *
   * @override
   */
  value: string
}

export type { CharacterEscapeValueData, CharacterEscapeValue as default }
