/**
 * @file creators
 * @module examples/jack/compile/creators
 */

import type {
  Comment,
  CommentCloser,
  CommentLinePrefix,
  CommentMarker,
  CommentOpener,
  CommentPadding
} from '@flex-development/docast'
import type {
  ArrayExpression,
  ArrayMarker,
  BooleanExpression,
  Break,
  CharacterEscape,
  CharacterEscapeValue,
  EscapeMarker,
  FieldSeparator,
  HexEscape,
  HexEscapeValue,
  Identifier,
  LinePrefix,
  NulEscape,
  NulEscapeValue,
  NullExpression,
  NumberExpression,
  ObjectExpression,
  ObjectMarker,
  ObjectMember,
  Operand,
  SerializedSignOperator,
  SignOperator,
  StringExpression,
  StringMarker,
  UnexpectedValue,
  UnicodeEscape,
  UnicodeEscapeValue,
  UnsignedNumber,
  ValueSeparator,
  Whitespace
} from '@flex-development/jack/ast'
import { nt } from '@flex-development/jack/symbol'
import { chars } from '@flex-development/mark-util-symbol'
import type { Token } from '@flex-development/mark/parse'
import { u } from '@flex-development/unist-util-builder'
import { ok } from 'devlop'

export {
  arrayExpression,
  arrayMarker,
  booleanExpression,
  characterEscape,
  characterEscapeValue,
  comment,
  commentCloser,
  commentLinePrefix,
  commentMarker,
  commentOpener,
  commentPadding,
  escapeMarker,
  fieldSeparator,
  hexEscape,
  hexEscapeValue,
  identifier,
  lineEnding,
  lineEndingBlank,
  linePrefix,
  nulEscape,
  nulEscapeValue,
  nullExpression,
  numberExpression,
  objectExpression,
  objectMarker,
  objectMember,
  operand,
  signOperator,
  stringExpression,
  stringMarker,
  unexpectedValue,
  unicodeEscape,
  unicodeEscapeValue,
  unsignedNumber,
  valueSeparator,
  whitespace
}

/**
 * Create an array expression.
 *
 * @see {@linkcode ArrayExpression}
 *
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {ArrayExpression}
 *  The new node
 */
function arrayExpression(this: void, token: Token): ArrayExpression {
  /**
   * The new node.
   *
   * @const {ArrayExpression} node
   */
  const node: ArrayExpression = u(nt.arrayExpression, {
    children: [] as unknown as ArrayExpression['children'],
    position: undefined
  })

  // signal malformed expression.
  if (token.malformed) node.malformed = token.malformed

  // signal sparse array.
  if (token.sparse) node.sparse = token.sparse

  return node
}

/**
 * Create an array marker.
 *
 * @see {@linkcode ArrayMarker}
 *
 * @this {void}
 *
 * @return {ArrayMarker}
 *  The new node
 */
function arrayMarker(this: void): ArrayMarker {
  return u(nt.arrayMarker, { position: undefined })
}

/**
 * Create a boolean expression.
 *
 * @see {@linkcode BooleanExpression}
 *
 * @this {void}
 *
 * @return {BooleanExpression}
 *  The new node
 */
function booleanExpression(this: void): BooleanExpression {
  return u(nt.booleanExpression, {
    position: undefined,
    value: undefined as unknown as BooleanExpression['value']
  })
}

/**
 * Create a character escape.
 *
 * @see {@linkcode CharacterEscape}
 *
 * @this {void}
 *
 * @return {CharacterEscape}
 *  The new node
 */
function characterEscape(this: void): CharacterEscape {
  return u(nt.characterEscape, {
    children: [] as unknown as CharacterEscape['children'],
    position: undefined
  })
}

/**
 * Create a character escape value.
 *
 * @see {@linkcode CharacterEscapeValue}
 *
 * @this {void}
 *
 * @return {CharacterEscapeValue}
 *  The new node
 */
function characterEscapeValue(this: void): CharacterEscapeValue {
  return u(nt.characterEscapeValue, { position: undefined, value: chars.empty })
}

/**
 * Create a comment.
 *
 * @see {@linkcode Comment}
 *
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {Comment}
 *  The new node
 */
function comment(this: void, token: Token): Comment {
  ok(token.kind, 'expected comment kind')

  return u(nt.comment, {
    children: [] as unknown as Comment['children'],
    kind: token.kind,
    position: undefined
  })
}

/**
 * Create a comment closer.
 *
 * @see {@linkcode CommentCloser}
 *
 * @this {void}
 *
 * @return {CommentCloser}
 *  The new node
 */
function commentCloser(this: void): CommentCloser {
  return u(nt.commentCloser, {
    children: [] as unknown as CommentCloser['children'],
    position: undefined
  })
}

/**
 * Create a comment line prefix.
 *
 * @see {@linkcode CommentLinePrefix}
 *
 * @this {void}
 *
 * @return {CommentLinePrefix}
 *  The new node
 */
function commentLinePrefix(this: void): CommentLinePrefix {
  return u(nt.commentLinePrefix, {
    children: [] as unknown as CommentLinePrefix['children'],
    position: undefined
  })
}

/**
 * Create a comment marker.
 *
 * @see {@linkcode CommentMarker}
 *
 * @this {void}
 *
 * @return {CommentMarker}
 *  The new node
 */
function commentMarker(this: void): CommentMarker {
  return u(nt.commentMarker, { position: undefined, value: chars.empty })
}

/**
 * Create a comment opener.
 *
 * @see {@linkcode CommentOpener}
 *
 * @this {void}
 *
 * @return {CommentOpener}
 *  The new node
 */
function commentOpener(this: void): CommentOpener {
  return u(nt.commentOpener, {
    children: [] as unknown as CommentOpener['children'],
    position: undefined
  })
}

/**
 * Create comment padding.
 *
 * @see {@linkcode CommentPadding}
 *
 * @this {void}
 *
 * @return {CommentPadding}
 *  The new node
 */
function commentPadding(this: void): CommentPadding {
  return u(nt.commentPadding, { position: undefined })
}

/**
 * Create an escape marker.
 *
 * @see {@linkcode EscapeMarker}
 *
 * @this {void}
 *
 * @return {EscapeMarker}
 *  The new node
 */
function escapeMarker(this: void): EscapeMarker {
  return u(nt.escapeMarker, { position: undefined })
}

/**
 * Create an object field separator.
 *
 * @see {@linkcode FieldSeparator}
 *
 * @this {void}
 *
 * @return {FieldSeparator}
 *  The new node
 */
function fieldSeparator(this: void): FieldSeparator {
  return u(nt.fieldSeparator, { position: undefined })
}

/**
 * Create an hexadecimal escape sequence.
 *
 * @see {@linkcode HexEscape}
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {HexEscape}
 *  The new node
 */
function hexEscape(this: void, token: Token): HexEscape {
  /**
   * The new node.
   *
   * @const {HexEscape} node
   */
  const node: HexEscape = u(nt.hexEscape, {
    children: [] as unknown as HexEscape['children'],
    position: undefined
  })

  // signal malformed escape sequence.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create an hexadecimal escape sequence value.
 *
 * @see {@linkcode HexEscapeValue}
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {HexEscapeValue}
 *  The new node
 */
function hexEscapeValue(this: void, token: Token): HexEscapeValue {
  /**
   * The new node.
   *
   * @const {HexEscapeValue} node
   */
  const node: HexEscapeValue = u(nt.hexEscapeValue, {
    position: undefined,
    value: chars.empty
  })

  // signal malformed escape sequence value.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create an identifier.
 *
 * @see {@linkcode Identifier}
 *
 * @this {void}
 *
 * @return {Identifier}
 *  The new node
 */
function identifier(this: void): Identifier {
  return u(nt.identifier, { name: chars.empty, position: undefined })
}

/**
 * Create a line ending.
 *
 * @see {@linkcode Break}
 *
 * @this {void}
 *
 * @return {Break}
 *  The new node
 */
function lineEnding(this: void): Break {
  return u(nt.break, { position: undefined })
}

/**
 * Create a blank line.
 *
 * @see {@linkcode Break}
 *
 * @this {void}
 *
 * @return {Break}
 *  The new node
 */
function lineEndingBlank(this: void): Break {
  return u(nt.break, { position: undefined })
}

/**
 * Create a line prefix.
 *
 * @see {@linkcode LinePrefix}
 *
 * @this {void}
 *
 * @return {LinePrefix}
 *  The new node
 */
function linePrefix(this: void): LinePrefix {
  return u(nt.linePrefix, { position: undefined })
}

/**
 * Create a nul escape sequence.
 *
 * @see {@linkcode NulEscape}
 *
 * @this {void}
 *
 * @return {NulEscape}
 *  The new node
 */
function nulEscape(this: void): NulEscape {
  return u(nt.nulEscape, {
    children: [] as unknown as NulEscape['children'],
    position: undefined
  })
}

/**
 * Create a nul escape sequence value.
 *
 * @see {@linkcode NulEscapeValue}
 *
 * @this {void}
 *
 * @return {NulEscapeValue}
 *  The new node
 */
function nulEscapeValue(this: void): NulEscapeValue {
  return u(nt.nulEscapeValue, { position: undefined, value: chars.digit0 })
}

/**
 * Create a null expression.
 *
 * @see {@linkcode NullExpression}
 *
 * @this {void}
 *
 * @return {NullExpression}
 *  The new node
 */
function nullExpression(this: void): NullExpression {
  return u(nt.nullExpression, { position: undefined, value: null })
}

/**
 * Create a number expression.
 *
 * @see {@linkcode NumberExpression}
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {NumberExpression}
 *  The new node
 */
function numberExpression(this: void, token: Token): NumberExpression {
  /**
   * The new node.
   *
   * @const {NumberExpression} node
   */
  const node: NumberExpression = u(nt.numberExpression, {
    children: [] as unknown as NumberExpression['children'],
    position: undefined
  })

  // signal malformed expression.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create an object expression.
 *
 * @see {@linkcode ObjectExpression}
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {ObjectExpression}
 *  The new node
 */
function objectExpression(this: void, token: Token): ObjectExpression {
  /**
   * The new node.
   *
   * @const {ObjectExpression} node
   */
  const node: ObjectExpression = u(nt.objectExpression, {
    children: [] as unknown as ObjectExpression['children'],
    position: undefined
  })

  // signal malformed expression.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create an object marker.
 *
 * @see {@linkcode ObjectMarker}
 *
 * @this {void}
 *
 * @return {ObjectMarker}
 *  The new node
 */
function objectMarker(this: void): ObjectMarker {
  return u(nt.objectMarker, { position: undefined })
}

/**
 * Create an object member.
 *
 * @see {@linkcode ArrayExpression}
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {ObjectMember}
 *  The new node
 */
function objectMember(this: void, token: Token): ObjectMember {
  /**
   * The new node.
   *
   * @const {ObjectMember} node
   */
  const node: ObjectMember = u(nt.objectMember, {
    children: [] as unknown as ObjectMember['children'],
    key: chars.empty,
    position: undefined
  })

  // signal malformed object member.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create an operand.
 *
 * @see {@linkcode Operand}
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {Operand}
 *  The new node
 */
function operand(this: void, token: Token): Operand {
  /**
   * The new node.
   *
   * @const {Operand} node
   */
  const node: Operand = u(nt.operand, {
    position: undefined,
    value: chars.empty
  })

  // signal malformed operand.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create a string expression.
 *
 * @see {@linkcode StringExpression}
 * @see {@linkcode Token}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {StringExpression}
 *  The new node
 */
function stringExpression(this: void, token: Token): StringExpression {
  /**
   * The new node.
   *
   * @const {StringExpression} node
   */
  const node: StringExpression = u(nt.stringExpression, {
    children: [] as unknown as StringExpression['children'],
    position: undefined
  })

  // signal malformed expression.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create a sign operator.
 *
 * @see {@linkcode SignOperator}
 *
 * @this {void}
 *
 * @return {SignOperator}
 *  The new node
 */
function signOperator(this: void): SignOperator {
  return u(nt.signOperator, {
    position: undefined,
    value: chars.empty as SerializedSignOperator
  })
}

/**
 * Create a string marker.
 *
 * @see {@linkcode StringMarker}
 *
 * @this {void}
 *
 * @return {StringMarker}
 *  The new node
 */
function stringMarker(this: void): StringMarker {
  return u(nt.stringMarker, { position: undefined, value: chars.quotationMark })
}

/**
 * Create an unexpected value.
 *
 * @see {@linkcode UnexpectedValue}
 *
 * @this {void}
 *
 * @return {UnexpectedValue}
 *  The new node
 */
function unexpectedValue(this: void): UnexpectedValue {
  return u(nt.unexpectedValue, { position: undefined, value: chars.empty })
}

/**
 * Create a unicode escape sequence.
 *
 * @see {@linkcode Token}
 * @see {@linkcode UnicodeEscape}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {UnicodeEscape}
 *  The new node
 */
function unicodeEscape(this: void, token: Token): UnicodeEscape {
  /**
   * The new node.
   *
   * @const {UnicodeEscape} node
   */
  const node: UnicodeEscape = u(nt.unicodeEscape, {
    children: [] as unknown as UnicodeEscape['children'],
    position: undefined
  })

  // signal malformed escape sequence.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create a unicode escape sequence value.
 *
 * @see {@linkcode Token}
 * @see {@linkcode UnicodeEscapeValue}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {UnicodeEscapeValue}
 *  The new node
 */
function unicodeEscapeValue(this: void, token: Token): UnicodeEscapeValue {
  /**
   * The new node.
   *
   * @const {UnicodeEscapeValue} node
   */
  const node: UnicodeEscapeValue = u(nt.unicodeEscapeValue, {
    position: undefined,
    value: chars.empty
  })

  // signal malformed escape sequence value.
  if (token.malformed) node.malformed = token.malformed

  return node
}

/**
 * Create an unsigned number.
 *
 * @see {@linkcode UnsignedNumber}
 *
 * @this {void}
 *
 * @return {UnsignedNumber}
 *  The new node
 */
function unsignedNumber(this: void): UnsignedNumber {
  return u(nt.unsignedNumber, { position: undefined, value: chars.empty })
}

/**
 * Create an array value separator.
 *
 * @see {@linkcode ValueSeparator}
 *
 * @this {void}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {ValueSeparator}
 *  The new node
 */
function valueSeparator(this: void, token: Token): ValueSeparator {
  /**
   * The new node.
   *
   * @const {ValueSeparator} node
   */
  const node: ValueSeparator = u(nt.valueSeparator, { position: undefined })

  // signal trailing separator.
  if (token.trailing) node.trailing = token.trailing

  return node
}

/**
 * Create whitespace.
 *
 * @see {@linkcode Whitespace}
 *
 * @this {void}
 *
 * @return {Whitespace}
 *  The new node
 */
function whitespace(this: void): Whitespace {
  return u(nt.whitespace, { position: undefined, value: chars.empty })
}
