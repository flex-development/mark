/**
 * @file Content - node
 * @module examples/jack/ast/content/node
 */

import type {
  ArrayMarker,
  Break,
  CharacterEscape,
  CharacterEscapeValue,
  EscapeMarker,
  ExpressionMap,
  FieldSeparator,
  HexEscape,
  HexEscapeValue,
  Identifier,
  LinePrefix,
  NulEscape,
  NulEscapeValue,
  ObjectMarker,
  ObjectMember,
  Operand,
  Root,
  SignOperator,
  StringMarker,
  UnexpectedValue,
  UnicodeEscape,
  UnicodeEscapeValue,
  UnsignedNumber,
  ValueSeparator,
  Whitespace
} from '@flex-development/jack/ast'

/**
 * Union of registered jack nodes.
 *
 * To register custom jack nodes, augment {@linkcode NodeMap}.
 * They will be added to this union automatically.
 */
type JackNode = NodeMap[keyof NodeMap]

/**
 * Registry of jack nodes.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack/ast' {
 *    interface NodeMap {
 *      customNode: CustomNode
 *    }
 *  }
 *
 * @see {@linkcode ExpressionMap}
 *
 * @extends {ExpressionMap}
 */
interface NodeMap extends ExpressionMap {
  arrayMarker: ArrayMarker
  break: Break
  characterEscape: CharacterEscape
  characterEscapeValue: CharacterEscapeValue
  escapeMarker: EscapeMarker
  fieldSeparator: FieldSeparator
  hexEscape: HexEscape
  hexEscapeValue: HexEscapeValue
  identifier: Identifier
  linePrefix: LinePrefix
  nulEscape: NulEscape
  nulEscapeValue: NulEscapeValue
  objectMarker: ObjectMarker
  objectMember: ObjectMember
  operand: Operand
  root: Root
  signOperator: SignOperator
  stringMarker: StringMarker
  unexpectedValue: UnexpectedValue
  unicodeEscape: UnicodeEscape
  unicodeEscapeValue: UnicodeEscapeValue
  unsignedNumber: UnsignedNumber
  valueSeparator: ValueSeparator
  whitespace: Whitespace
}

export type { JackNode, NodeMap }
