/**
 * @file Nodes - HexEscapeValue
 * @module examples/jack/ast/nodes/HexEscapeValue
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with hexadecimal escape sequence values.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface HexEscapeValueData extends Data {}

/**
 * A hexadecimal escape sequence value.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface HexEscapeValue extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode HexEscapeValueData}
   *
   * @override
   */
  data?: HexEscapeValueData | undefined

  /**
   * Whether the escape sequence value is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'hexEscapeValue'

  /**
   * The escape sequence value.
   *
   * @override
   */
  value: string
}

export type { HexEscapeValue as default, HexEscapeValueData }
