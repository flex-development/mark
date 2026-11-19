/**
 * @file Nodes - Operand
 * @module examples/jack/ast/nodes/Operand
 */

import type { Data, Literal } from '@flex-development/jack/ast'

/**
 * Info associated with operands.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface OperandData extends Data {}

/**
 * A signed number operand.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface Operand extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode OperandData}
   *
   * @override
   */
  data?: OperandData | undefined

  /**
   * Whether the operand is malformed.
   */
  malformed?: boolean | null | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'operand'

  /**
   * The serialized operand.
   *
   * @override
   */
  value: string
}

export type { Operand as default, OperandData }
