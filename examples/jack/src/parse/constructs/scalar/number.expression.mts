/**
 * @file Constructs - numberExpression
 * @module examples/jack/parse/constructs/numberExpression
 */

import { tt } from '@flex-development/jack/symbol'
import {
  factoryMarkers,
  fromString
} from '@flex-development/mark-factory-markers'
import {
  asciiDigit,
  asciiHexDigit,
  eos
} from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  Effects,
  PartialConstruct,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

/**
 * The number expression construct.
 *
 * @const {Construct} numberExpression
 */
const numberExpression: Construct = { tokenize: tokenizeNumberExpression }

export default numberExpression

/**
 * The exponential number construct.
 *
 * This construct captures a number with an exponent component.
 *
 * @internal
 *
 * @const {PartialConstruct} exponential
 */
const exponential: PartialConstruct = {
  partial: true,
  tokenize: tokenizeExponential
}

/**
 * The float construct.
 *
 * This construct captures a number with a fractional component.
 *
 * @internal
 *
 * @const {PartialConstruct} float
 */
const float: PartialConstruct = { partial: true, tokenize: tokenizeFloat }

/**
 * The hexadecimal number construct.
 *
 * @internal
 *
 * @const {PartialConstruct} hexadecimal
 */
const hexadecimal: PartialConstruct = {
  partial: true,
  tokenize: tokenizeHexadecimal
}

/**
 * The `Infinity` keyword construct.
 *
 * @internal
 *
 * @const {PartialConstruct} infinity
 */
const infinity: PartialConstruct = { partial: true, tokenize: tokenizeInfinity }

/**
 * The integer construct.
 *
 * @internal
 *
 * @const {PartialConstruct} integer
 */
const integer: PartialConstruct = { partial: true, tokenize: tokenizeInteger }

/**
 * The `NaN` keyword construct.
 *
 * @internal
 *
 * @const {PartialConstruct} nan
 */
const nan: PartialConstruct = { partial: true, tokenize: tokenizeNan }

/**
 * The sign operator construct.
 *
 * @internal
 *
 * @const {PartialConstruct} signOperator
 */
const signOperator: PartialConstruct = {
  partial: true,
  tokenize: tokenizeSignOperator
}

/**
 * The unsigned number construct.
 *
 * @internal
 *
 * @const {PartialConstruct} unsignedNumber
 */
const unsignedNumber: PartialConstruct = {
  partial: true,
  tokenize: tokenizeUnsignedNumber
}

/**
 * Tokenize a number expression.
 *
 * Number expressions are captured by attempting the most specific form first,
 * then falling back to less specific forms.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeNumberExpression(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  /**
   * The current {@linkcode tt.operand}.
   *
   * @var {Token | undefined} operand
   */
  let operand: Token | undefined

  /**
   * Whether the expression is signed.
   *
   * @var {boolean | undefined} signed
   */
  let signed: boolean | undefined

  return startNumber

  /**
   * Start the expression.
   *
   * A number may begin with a sign.
   * The sign is consumed before attempting to capture the number body.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startNumber(this: void, code: Code): State | undefined {
    effects.enter(tt.numberExpression)

    // try capturing a sign operator.
    // if the attempt succeeds, start a new operand.
    // try capturing an unsigned number otherwise.
    return effects.attempt(signOperator, afterSign, tryUnsignedNumber)(code)
  }

  /**
   * After a sign operator.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterSign(this: void, code: Code): State | undefined {
    signed = true

    // check for an unsigned number body.
    // if the check succeeds, start a new operand.
    // end the malformed number expression otherwise.
    return effects.check(
      unsignedNumber,
      startOperand,
      endSignedMalformedNumber
    )(code)
  }

  /**
   * Start a new operand.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startOperand(this: void, code: Code): State | undefined {
    operand = effects.enter(tt.operand)
    return tryUnsignedNumber(code)
  }

  /**
   * Try capturing an unsigned number.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryUnsignedNumber(this: void, code: Code): State | undefined {
    if (!signed) effects.enter(tt.unsignedNumber)
    return effects.attempt(unsignedNumber, endUnsignedNumber, nok)(code)
  }

  /**
   * Finish an unsigned number.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endUnsignedNumber(this: void, code: Code): State | undefined {
    if (!signed) effects.exit(tt.unsignedNumber)
    return endNumber(code)
  }

  /**
   * End a wellformed expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endNumber(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')

    // close the current operand.
    if (operand) effects.exit(operand.type)

    /**
     * The closed token.
     *
     * @const {Token} token
     */
    const token: Token = effects.exit(tt.numberExpression)

    // signal malformed syntax.
    if (self.containerState.malformed) {
      if (operand) operand.malformed = true
      token.malformed = true
    }

    return ok(code)
  }

  /**
   * End a malformed expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endSignedMalformedNumber(this: void, code: Code): State | undefined {
    assert(signed, 'expected signed number')
    assert(!operand, 'did not expect `operand`')
    effects.exit(tt.numberExpression).malformed = true
    return ok(code)
  }
}

/**
 * Tokenize an unsigned number expression.
 *
 * Unsigned number expressions are captured by attempting the most specific form
 * first, then falling back to less specific forms.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeUnsignedNumber(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return tryHexadecimal

  /**
   * Try capturing a hexadecimal.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryHexadecimal(this: void, code: Code): State | undefined {
    return effects.attempt(hexadecimal, ok, tryInfinity)(code)
  }

  /**
   * Try capturing `Infinity`.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryInfinity(this: void, code: Code): State | undefined {
    return effects.attempt(infinity, ok, tryNan)(code)
  }

  /**
   * Try capturing `NaN`.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryNan(this: void, code: Code): State | undefined {
    return effects.attempt(nan, ok, tryExponential)(code)
  }

  /**
   * Try capturing an exponential.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryExponential(this: void, code: Code): State | undefined {
    return effects.attempt(exponential, ok, tryFloat)(code)
  }

  /**
   * Try capturing a float.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryFloat(this: void, code: Code): State | undefined {
    return effects.attempt(float, ok, tryInteger)(code)
  }

  /**
   * Try capturing an integer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryInteger(this: void, code: Code): State | undefined {
    return effects.attempt(integer, ok, nok)(code)
  }
}

/**
 * Tokenize an exponential number.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeExponential(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  return startExponential

  /**
   * Start an exponential number.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startExponential(this: void, code: Code): State | undefined {
    return effects.attempt(
      float,
      beforeMarker,
      effects.attempt(integer, beforeMarker, nok)
    )(code)
  }

  /**
   * Try capturing an exponential number marker.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeMarker(this: void, code: Code): State | undefined {
    if (marker(code)) return effects.consume(code), maybeSign
    return nok(code) // cannot be an exponential number.
  }

  /**
   * Try capturing an inline sign operator.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeSign(this: void, code: Code): State | undefined {
    if (sign(code)) return effects.consume(code), afterSign
    return noSign(code)
  }

  /**
   * Capture the digits following an exponential sign.
   *
   * The exponential must contain at least one digit after the sign.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterSign(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')

    // can continue an exponential.
    if (asciiDigit(code)) return effects.consume(code), afterSign

    // an exponential must have at least one digit after the sign marker.
    if (sign(self.previous)) self.containerState.malformed = true

    // exponential done.
    // the exponential may be malformed.
    return ok(code)
  }

  /**
   * Capture the digits following an exponential marker without a sign.
   *
   * The exponential must contain at least one digit after the marker.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function noSign(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')

    // can continue an exponential.
    if (asciiDigit(code)) return effects.consume(code), noSign

    // an exponential must have at least one digit after the marker.
    if (marker(self.previous)) self.containerState.malformed = true

    // exponential done.
    // the exponential may be malformed.
    return ok(code)
  }

  /**
   * Check if `code` represents an exponential number marker.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {boolean}
   *  Whether `code` is an exponential number marker
   */
  function marker(this: void, code: Code): boolean {
    return code === codes.uppercaseE || code === codes.lowercaseE
  }
}

/**
 * Tokenize a floating point number.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeFloat(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startFloat

  /**
   * Start a floating point number.
   *
   * @example
   *  ```json5
   *  .13
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  3.13
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  13.98
   *  ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startFloat(this: void, code: Code): State | undefined {
    // capture leading decimal point, then try continuing the float.
    if (code === codes.dot) return effects.consume(code), afterLeadDecimalPoint

    // try starting a float with leading digits.
    return effects.attempt(integer, maybeDecimalPoint, nok)(code)
  }

  /**
   * After a leading decimal point.
   *
   * At least one digit is required.
   *
   * @example
   *  ```json5
   *  .13
   *   ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterLeadDecimalPoint(this: void, code: Code): State | undefined {
    // at least one digit is required after a leading decimal point.
    if (asciiDigit(code)) return afterDecimalPoint(code)

    // not a float.
    return nok(code)
  }

  /**
   * Consume the decimal point.
   *
   * @example
   *  ```json5
   *  3.13
   *   ^
   *  ```
   *
   * @example
   *  ```json5
   *  13.98
   *    ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeDecimalPoint(this: void, code: Code): State | undefined {
    if (code === codes.dot) return effects.consume(code), afterDecimalPoint
    return nok(code)
  }

  /**
   * Capture the fractional component of a float.
   *
   * @example
   *  ```json5
   *  3.
   *    ^
   *  ```
   *
   * @example
   *  ```json5
   *  3.13
   *    ^^
   *  ```
   *
   * @example
   *  ```json5
   *  13.98
   *     ^^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterDecimalPoint(this: void, code: Code): State | undefined {
    // capture the digit, then try continuing the float.
    if (asciiDigit(code)) return effects.consume(code), afterDecimalPoint

    // float done.
    // the float may or may not have a trailing decimal point.
    return ok(code)
  }
}

/**
 * Tokenize a hexadecimal number.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeHexadecimal(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  return startHexadecimal

  /**
   * Start a hexadecimal number.
   *
   * @example
   *  ```json5
   *  0XAA
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  0xff
   *  ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startHexadecimal(this: void, code: Code): State | undefined {
    if (code === codes.digit0) return effects.consume(code), x
    return nok(code)
  }

  /**
   * Try finishing the hexadecimal prefix.
   *
   * @example
   *  ```json5
   *  0XAA
   *   ^
   *  ```
   *
   * @example
   *  ```json5
   *  0xff
   *   ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function x(this: void, code: Code): State | undefined {
    if (!marker(code)) return nok(code) // cannot be a hexadecimal number.

    // consume the hexadecimal number marker.
    return effects.consume(code), afterPrefix
  }

  /**
   * After the hexadecimal prefix.
   *
   * @example
   *  ```json5
   *  0XAA
   *    ^
   *  ```
   *
   * @example
   *  ```json5
   *  0xff
   *    ^
   *  ```
   *
   * @example
   *  ```json5
   *  0x
   *    ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterPrefix(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')

    // capture hex digits.
    if (asciiHexDigit(code)) return hexDigits(code)

    // the hexadecimal number is malformed
    // if the prefix is not followed by at least one hexadecimal digit.
    self.containerState.malformed = true
    return ok(code)
  }

  /**
   * Capture hex digits.
   *
   * @example
   *  ```json5
   *  0XAA
   *    ^^
   *  ```
   *
   * @example
   *  ```json5
   *  0xff
   *    ^^
   *  ```
   *
   * @example
   *  ```json5
   *  0x123456789ABCDEFabcdef
   *    ^^^^^^^^^^^^^^^^^^^^^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function hexDigits(this: void, code: Code): State | undefined {
    if (asciiHexDigit(code)) return effects.consume(code), hexDigits
    return ok(code)
  }

  /**
   * Check if `code` represents an hexadecimal number marker.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {boolean}
   *  Whether `code` is an hexadecimal number marker
   */
  function marker(this: void, code: Code): boolean {
    return code === codes.uppercaseX || code === codes.lowercaseX
  }
}

/**
 * Tokenize `Infinity`.
 *
 * @example
 *  ```json5
 *  Infinity
 *  ^^^^^^^^
 *  ```
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeInfinity(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return factoryMarkers(effects, ok, nok, fromString('Infinity'))
}

/**
 * Tokenize an integer.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeInteger(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startInteger

  /**
   * Start an integer.
   *
   * @example
   *  ```json5
   *  0
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  3
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  1398
   *  ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startInteger(this: void, code: Code): State | undefined {
    // at end of stream.
    if (eos(code)) return nok(code)

    // cannot start an integer.
    if (!asciiDigit(code)) return nok(code)

    // integer cannot have leading zeroes, but zero can be an integer.
    if (code === codes.digit0) return effects.consume(code), ok

    // at the beginning of a non-zero integer.
    return effects.consume(code), insideInteger
  }

  /**
   * Capture the remaining digits of an integer.
   *
   * @example
   *  ```json5
   *  3
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  1398
   *  ^^^^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function insideInteger(this: void, code: Code): State | undefined {
    // can continue an integer.
    if (asciiDigit(code)) return effects.consume(code), insideInteger

    // integer cannot continue.
    return ok(code)
  }
}

/**
 * Tokenize `NaN`.
 *
 * @example
 *  ```json5
 *  NaN
 *  ^^^
 *  ```
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeNan(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return factoryMarkers(effects, ok, nok, fromString('NaN'))
}

/**
 * Tokenize a sign operator.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeSignOperator(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return maybeOperator

  /**
   * Try capturing a sign operator.
   *
   * @example
   *  ```json5
   *  +13
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  -26
   *  ^
   *  ```
   *
   * @example
   *  ```json5
   *  39
   *  ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeOperator(this: void, code: Code): State | undefined {
    if (!sign(code)) return nok(code) // not a sign operator.

    // capture the operator.
    effects.enter(tt.signOperator)
    effects.consume(code)
    effects.exit(tt.signOperator)

    // delegate back to the parent construct.
    return ok
  }
}

/**
 * Check if `code` represents a sign operator.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {unknown} code
 *  The current character code
 * @return {boolean}
 *  Whether `code` is a sign operator
 */
function sign(this: void, code: unknown): boolean {
  return code === codes.plusSign || code === codes.dash
}
