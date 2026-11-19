/**
 * @file Constructs - hexEscape
 * @module examples/jack/parse/constructs/hexEscape
 */

import { tt } from '@flex-development/jack/symbol'
import factoryMarkers from '@flex-development/mark-factory-markers'
import { asciiHexDigit } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Construct,
  Effects,
  MarkerSequence,
  PartialConstruct,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

/**
 * The hexadecimal escape sequence construct.
 *
 * @const {Construct} hexEscape
 */
const hexEscape: Construct = { tokenize: tokenizeHexEscape }

export default hexEscape

/**
 * The hexadecimal escape value construct.
 *
 * @internal
 *
 * @const {PartialConstruct} hexEscapeValue
 */
const hexEscapeValue: PartialConstruct = {
  partial: true,
  tokenize: tokenizeHexEscapeValue
}

/**
 * The malformed hexadecimal escape value construct.
 *
 * @internal
 *
 * @const {PartialConstruct} malformedHexEscapeValue
 */
const malformedHexEscapeValue: PartialConstruct = {
  partial: true,
  tokenize: tokenizeMalformedHexEscapeValue
}

/**
 * Tokenize a hexadecimal escape sequence.
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
function tokenizeHexEscape(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startEscape

  /**
   * Start the escape sequence.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startEscape(this: void, code: Code): State | undefined {
    assert(code === codes.backslash, 'expected `codes.backslash`')

    // start the hex escape and the inner character escape.
    effects.enter(tt.hexEscape)
    effects.enter(tt.characterEscape)

    // capture the escape marker.
    effects.enter(tt.escapeMarker)
    effects.consume(code)
    effects.exit(tt.escapeMarker)

    return x
  }

  /**
   * After the escape marker.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function x(this: void, code: Code): State | undefined {
    // the character escape value of a hex escape sequence must be 'x'.
    if (code !== codes.lowercaseX) return nok(code)

    // capture the character escape value.
    effects.enter(tt.characterEscapeValue)
    effects.consume(code)
    effects.exit(tt.characterEscapeValue)

    // finish the inner character escape.
    effects.exit(tt.characterEscape)

    // try capturing a wellformed escape value.
    // if the attempt fails, try capturing a malformed escape value.
    return effects.attempt(
      hexEscapeValue,
      endEscape,
      effects.attempt(malformedHexEscapeValue, endMalformedEscape)
    )
  }

  /**
   * After a wellformed escape value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endEscape(this: void, code: Code): State | undefined {
    effects.exit(tt.hexEscape)
    return ok(code)
  }

  /**
   * After a malformed escape value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endMalformedEscape(this: void, code: Code): State | undefined {
    effects.exit(tt.hexEscape).malformed = true
    return ok(code)
  }
}

/**
 * Tokenize a wellformed escape value.
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
function tokenizeHexEscapeValue(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * The expected marker sequence.
   *
   * @const {MarkerSequence} markers
   */
  const markers: MarkerSequence = [asciiHexDigit, asciiHexDigit]

  return startEscapeValue

  /**
   * Start the escape value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startEscapeValue(this: void, code: Code): State | undefined {
    effects.enter(tt.hexEscapeValue)
    return factoryMarkers(effects, endEscapeValue, nok, markers)(code)
  }

  /**
   * Finish the escape value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endEscapeValue(this: void, code: Code): State | undefined {
    effects.exit(tt.hexEscapeValue)
    return ok(code)
  }
}

/**
 * Tokenize a malformed escape value.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeMalformedHexEscapeValue(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  /**
   * The expected marker sequence.
   *
   * @const {MarkerSequence} markers
   */
  const markers: MarkerSequence = [
    asciiHexDigit,
    { code: asciiHexDigit, optional: true }
  ]

  return startEscapeValue

  /**
   * Start the escape value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startEscapeValue(this: void, code: Code): State | undefined {
    if (!asciiHexDigit(code)) return ok(code)

    // start the escape value.
    effects.enter(tt.hexEscapeValue)

    // try capturing no more than 2 hex digits.
    return factoryMarkers(
      effects,
      endEscapeValue,
      endEscapeValue,
      markers
    )(code)
  }

  /**
   * Finish the escape value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endEscapeValue(this: void, code: Code): State | undefined {
    effects.exit(tt.hexEscapeValue).malformed = true
    return ok(code)
  }
}
