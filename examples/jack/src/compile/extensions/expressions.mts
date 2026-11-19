/**
 * @file Extensions - expressions
 * @module examples/jack/compile/extensions/expressions
 */

import type {
  SerializedSignOperator,
  SerializedStringMarker
} from '@flex-development/jack/ast'
import { nt, tt } from '@flex-development/jack/symbol'
import { chars } from '@flex-development/mark-util-symbol'
import type {
  Closer,
  CompileContext,
  Extension,
  Node,
  Opener
} from '@flex-development/mark/ast'
import type { Token } from '@flex-development/mark/parse'
import { ok } from 'devlop'
import {
  arrayExpression,
  arrayMarker,
  booleanExpression,
  characterEscape,
  characterEscapeValue,
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
} from '../creators.mts'

export default expressions

/**
 * Create the expressions AST extension.
 *
 * @this {void}
 *
 * @param {Opener} opener
 *  Create an `enter` event handler
 * @param {Closer} closer
 *  Create an `exit` event handler
 * @return {Extension}
 *  The extension
 */
function expressions(this: void, opener: Opener, closer: Closer): Extension {
  return {
    canContainEols: undefined,
    enter: {
      [tt.arrayExpression]: opener(arrayExpression),
      [tt.arrayMarker]: opener(arrayMarker),
      [tt.booleanExpression]: opener(booleanExpression, enterbooleanexpression),
      [tt.characterEscapeValue]: opener(characterEscapeValue, enterescapevalue),
      [tt.characterEscape]: opener(characterEscape),
      [tt.escapeMarker]: opener(escapeMarker),
      [tt.fieldSeparator]: opener(fieldSeparator),
      [tt.hexEscapeValue]: opener(hexEscapeValue, enterescapevalue),
      [tt.hexEscape]: opener(hexEscape),
      [tt.identifier]: opener(identifier, enteridentifier),
      [tt.lineEndingBlank]: opener(lineEndingBlank),
      [tt.lineEnding]: opener(lineEnding),
      [tt.linePrefix]: opener(linePrefix),
      [tt.nulEscapeValue]: opener(nulEscapeValue),
      [tt.nulEscape]: opener(nulEscape),
      [tt.nullExpression]: opener(nullExpression),
      [tt.numberExpression]: opener(numberExpression),
      [tt.objectExpression]: opener(objectExpression),
      [tt.objectMarker]: opener(objectMarker),
      [tt.objectMember]: opener(objectMember, enterobjectmember),
      [tt.operand]: opener(operand, enternumber),
      [tt.signOperator]: opener(signOperator, entersignoperator),
      [tt.stringExpression]: opener(stringExpression, enterobjectkey),
      [tt.stringMarker]: opener(stringMarker, enterstringmarker),
      [tt.unexpectedValue]: opener(unexpectedValue, enterunexpectedvalue),
      [tt.unicodeEscapeValue]: opener(unicodeEscapeValue, enterescapevalue),
      [tt.unicodeEscape]: opener(unicodeEscape),
      [tt.unsignedNumber]: opener(unsignedNumber, enternumber),
      [tt.valueSeparator]: opener(valueSeparator),
      [tt.whitespace]: opener(whitespace, enterwhitespace)
    },
    exit: {
      [tt.arrayExpression]: closer(),
      [tt.arrayMarker]: closer(),
      [tt.booleanExpression]: closer(),
      [tt.characterEscapeValue]: closer(),
      [tt.characterEscape]: closer(),
      [tt.escapeMarker]: closer(),
      [tt.fieldSeparator]: closer(),
      [tt.hexEscapeValue]: closer(),
      [tt.hexEscape]: closer(),
      [tt.identifier]: closer(),
      [tt.lineEndingBlank]: closer(),
      [tt.lineEnding]: closer(),
      [tt.linePrefix]: closer(),
      [tt.nulEscapeValue]: closer(),
      [tt.nulEscape]: closer(),
      [tt.nullExpression]: closer(),
      [tt.numberExpression]: closer(),
      [tt.objectExpression]: closer(),
      [tt.objectMarker]: closer(),
      [tt.objectMember]: closer(exitobjectmember),
      [tt.operand]: closer(),
      [tt.signOperator]: closer(),
      [tt.stringExpression]: closer(),
      [tt.stringMarker]: closer(),
      [tt.unexpectedValue]: closer(),
      [tt.unicodeEscapeValue]: closer(),
      [tt.unicodeEscape]: closer(),
      [tt.unsignedNumber]: closer(),
      [tt.valueSeparator]: closer(),
      [tt.whitespace]: closer()
    }
  }
}

/**
 * Enter a boolean expression.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enterbooleanexpression(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.booleanExpression, 'expected `booleanExpression` token')

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `booleanExpression` node')

  tail.value = this.sliceSerialize(token) === 'true'
  return void token
}

/**
 * Enter an escape sequence value.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enterescapevalue(this: CompileContext, token: Token): undefined {
  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')

  ok(
    tail.type === nt.characterEscapeValue ||
      tail.type === nt.hexEscapeValue ||
      tail.type === nt.unicodeEscapeValue,
    'expected escape sequence value node'
  )

  // serialize the escape sequence value.
  tail.value = this.sliceSerialize(token)

  return void token
}

/**
 * Enter an identifier.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enteridentifier(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.identifier, 'expected `identifier` token')

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `identifier` node')

  // serialize the identifier text.
  // @ts-expect-error(2339): docast.Identifier does not have a `name` property.
  tail.name = this.sliceSerialize(token)

  // try attaching an object field name to a parent object member.
  return void enterobjectkey.call(this, token)
}

/**
 * Enter an operand or unsigned number.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enternumber(this: CompileContext, token: Token): undefined {
  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')

  ok(
    tail.type === nt.operand || tail.type === nt.unsignedNumber,
    'expected `operand` or `unsignedNumber` node'
  )

  /**
   * The serialized token.
   *
   * @const {string} value
   */
  const value: string = this.sliceSerialize(token)

  switch (true) {
    case tail.type === nt.operand: // signed number operand.
    case value.includes(chars.dot): // float.
    case value.includes(chars.lowercaseE): // exponential.
    case value.includes(chars.uppercaseE): // exponential.
    case value.includes(chars.lowercaseX): // hexadecimal.
    case value.includes(chars.uppercaseX): // hexadecimal.
      tail.value = value
      break
    case value === 'Infinity': // infinity (keyword).
      tail.value = Number.POSITIVE_INFINITY
      break
    case value === 'NaN': // nan (keyword).
      tail.value = Number.NaN
      break
    default: // integer.
      tail.value = +value
      break
  }

  return void token
}

/**
 * Enter an object key.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enterobjectkey(this: CompileContext, token: Token): undefined {
  ok(
    token.type === tt.identifier || token.type === tt.stringExpression,
    'expected `identifier` or `stringExpression` token'
  )

  /**
   * The last parent node on the stack.
   *
   * @const {Node | undefined} parent
   */
  const parent: Node | undefined = this.stack.at(-2)

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(parent, 'expected node on stack')
  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `identifier` node')

  // attach the object field name to the parent object member.
  if (parent.type === nt.objectMember && !parent.key) {
    parent.key = this.sliceSerialize(token)
  }

  return void token
}

/**
 * Enter an object member.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enterobjectmember(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.objectMember, 'expected `objectMember` token')
  this.data.member = true
  return void token
}

/**
 * Enter a sign operator.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function entersignoperator(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.signOperator, 'expected `signOperator` token')

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `signOperator` node')

  tail.value = this.sliceSerialize(token) as SerializedSignOperator
  return void token
}

/**
 * Enter a string marker.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enterstringmarker(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.stringMarker, 'expected `stringMarker` token')

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `stringMarker` node')

  // serialize the marker.
  tail.value = this.sliceSerialize(token) as SerializedStringMarker

  return void token
}

/**
 * Enter an unexpected value.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enterunexpectedvalue(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.unexpectedValue, 'expected `unexpectedValue` token')

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `unexpectedValue` node')

  // serialize the unexpected value.
  tail.value = this.sliceSerialize(token)

  return void token
}

/**
 * Enter whitespace.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function enterwhitespace(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.whitespace, 'expected `whitespace` token')

  /**
   * The last node on the stack.
   *
   * @const {Node | undefined} tail
   */
  const tail: Node | undefined = this.stack.at(-1)

  ok(tail, 'expected node on stack')
  ok(tail.type === token.type, 'expected `whitespace` node')

  // serialize the whitespace.
  tail.value = this.sliceSerialize(token, { expandTabs: true })

  return void token
}

/**
 * Exit an object member.
 *
 * @internal
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The corresponding token
 * @return {undefined}
 */
function exitobjectmember(this: CompileContext, token: Token): undefined {
  ok(token.type === tt.objectMember, 'expected `objectMember` token')
  delete this.data.member
  return void token
}
