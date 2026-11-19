/**
 * @file Constructs - unicodeEscape
 * @module examples/jack/parse/constructs/unicodeEscape
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
 * The unicode escape sequence construct.
 *
 * @const {Construct} unicodeEscape
 */
const unicodeEscape: Construct = { tokenize: tokenizeUnicodeEscape }

export default unicodeEscape

/**
 * The unicode escape value construct.
 *
 * @internal
 *
 * @const {PartialConstruct} unicodeEscapeValue
 */
const unicodeEscapeValue: PartialConstruct = {
  partial: true,
  tokenize: tokenizeUnicodeEscapeValue
}

/**
 * The malformed unicode escape value construct.
 *
 * @internal
 *
 * @const {PartialConstruct} malformedUnicodeEscapeValue
 */
const malformedUnicodeEscapeValue: PartialConstruct = {
  partial: true,
  tokenize: tokenizeMalformedUnicodeEscapeValue
}

/**
 * Tokenize a unicode escape sequence.
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
function tokenizeUnicodeEscape(
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

    // start the unicode escape and the inner character escape.
    effects.enter(tt.unicodeEscape)
    effects.enter(tt.characterEscape)

    // capture the escape marker.
    effects.enter(tt.escapeMarker)
    effects.consume(code)
    effects.exit(tt.escapeMarker)

    return u
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
  function u(this: void, code: Code): State | undefined {
    // the character escape value of a unicode escape sequence must be 'u'.
    if (code !== codes.lowercaseU) return nok(code)

    // capture the character escape value.
    effects.enter(tt.characterEscapeValue)
    effects.consume(code)
    effects.exit(tt.characterEscapeValue)

    // finish the inner character escape.
    effects.exit(tt.characterEscape)

    // try capturing a wellformed escape value.
    // if the attempt fails, try capturing a malformed escape value.
    return effects.attempt(
      unicodeEscapeValue,
      endEscape,
      effects.attempt(malformedUnicodeEscapeValue, endMalformedEscape)
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
    effects.exit(tt.unicodeEscape)
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
    effects.exit(tt.unicodeEscape).malformed = true
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
function tokenizeUnicodeEscapeValue(
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
  const markers: MarkerSequence = [
    asciiHexDigit,
    asciiHexDigit,
    asciiHexDigit,
    asciiHexDigit
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
    effects.enter(tt.unicodeEscapeValue)
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
    effects.exit(tt.unicodeEscapeValue)
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
function tokenizeMalformedUnicodeEscapeValue(
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
    { code: asciiHexDigit, optional: true },
    { code: asciiHexDigit, optional: true },
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
    effects.enter(tt.unicodeEscapeValue)

    // try capturing no more than 4 hex digits.
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
    effects.exit(tt.unicodeEscapeValue).malformed = true
    return ok(code)
  }
}
