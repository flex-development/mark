/**
 * @file Nodes - UnsignedNumber
 * @module examples/jack/ast/nodes/UnsignedNumber
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with unsigned numbers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnsignedNumberData extends Data {}

/**
 * An unsigned number.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface UnsignedNumber extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnsignedNumberData}
   *
   * @override
   */
  data?: UnsignedNumberData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'unsignedNumber'

  /**
   * The number.
   *
   * @override
   */
  value: number | string
}

export type { UnsignedNumber as default, UnsignedNumberData }
