/**
 * @file Nodes - NulEscapeValue
 * @module examples/jack/ast/nodes/NulEscapeValue
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with nul escape sequence values.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NulEscapeValueData extends Data {}

/**
 * A nul escape sequence value.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface NulEscapeValue extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NulEscapeValueData}
   *
   * @override
   */
  data?: NulEscapeValueData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'nulEscapeValue'

  /**
   * The escaped sequence value.
   *
   * @override
   */
  value: '0'
}

export type { NulEscapeValue as default, NulEscapeValueData }
