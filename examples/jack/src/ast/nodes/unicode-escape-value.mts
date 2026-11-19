/**
 * @file Nodes - UnicodeEscapeValue
 * @module examples/jack/ast/nodes/UnicodeEscapeValue
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with unicode escape sequence values.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnicodeEscapeValueData extends Data {}

/**
 * A unicode escape sequence value.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface UnicodeEscapeValue extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnicodeEscapeValueData}
   *
   * @override
   */
  data?: UnicodeEscapeValueData | undefined

  /**
   * Whether the escape sequence value is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'unicodeEscapeValue'

  /**
   * The escape sequence value.
   *
   * @override
   */
  value: string
}

export type { UnicodeEscapeValue as default, UnicodeEscapeValueData }
