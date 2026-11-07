/**
 * @file factorySpace
 * @module mark-factory-space/factory
 */

import type { Options } from '@flex-development/mark-factory-space'
import { whitespace } from '@flex-development/mark-util-character'
import type {
  Code,
  CodeCheck,
  Effects,
  State,
  TokenFields,
  TokenType
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

export default factorySpace

/**
 * Tokenize spaces and tabs.
 *
 * @see {@linkcode Effects}
 * @see {@linkcode Options}
 * @see {@linkcode State}
 *
 * @this {void}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {Options | null | undefined} [options]
 *  The tokenization options
 * @return {State}
 *  The initial state
 */
function factorySpace(
  this: void,
  effects: Effects,
  ok: State,
  options?: Options | null | undefined
): State

/**
 * Tokenize spaces and tabs.
 *
 * @see {@linkcode Effects}
 * @see {@linkcode State}
 * @see {@linkcode TokenType}
 *
 * @this {void}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {TokenType | null | undefined} [type]
 *  The token type to capture whitespace as.\
 *  If omitted, whitespace will be captured without emitting a token
 * @param {number | null | undefined} [max]
 *  The maximum number of spaces/tabs to consume (exclusive)
 * @return {State}
 *  The initial state
 */
function factorySpace(
  this: void,
  effects: Effects,
  ok: State,
  type?: TokenType | null | undefined,
  max?: number | null | undefined
): State

/**
 * Tokenize spaces and tabs.
 *
 * @see {@linkcode Effects}
 * @see {@linkcode Options}
 * @see {@linkcode State}
 * @see {@linkcode TokenFields}
 * @see {@linkcode TokenType}
 *
 * @this {void}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {Options | TokenType | null | undefined} [options]
 *  The tokenization options or the token type to capture whitespace as
 * @param {number | null | undefined} [max]
 *  The maximum number of spaces/tabs to consume (exclusive)
 * @return {State}
 *  The initial state
 */
function factorySpace(
  this: void,
  effects: Effects,
  ok: State,
  options?: Options | TokenType | null | undefined,
  max?: number | null | undefined
): State {
  if (typeof options === 'string') {
    options = { max, type: options }
  } else {
    options ??= {}
  }

  /**
   * The maximum number of spaces/tabs to tokenize.
   *
   * @const {number} limit
   */
  const limit: number = options.max ? options.max - 1 : Number.POSITIVE_INFINITY

  /**
   * The whitespace matcher.
   *
   * @const {CodeCheck} test
   */
  const test: CodeCheck = options.test ?? whitespace

  /**
   * The size of the whitespace sequence.
   *
   * @var {number} size
   */
  let size: number = 0

  return maybeWhitespace

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeWhitespace(this: void, code: Code): State | undefined {
    assert(options, 'expected `options`')
    assert(typeof options === 'object', 'expected `options` object')

    // start the whitespace sequence.
    if (test(code)) {
      options.type && effects.enter(options.type, options.fields)
      return insideWhitespace(code)
    }

    // no whitespace can be captured.
    return options.nok ? options.nok(code) : ok(code)
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function insideWhitespace(this: void, code: Code): State | undefined {
    assert(options, 'expected `options`')
    assert(typeof options === 'object', 'expected `options` object')

    // still inside the whitespace sequence.
    // the sequence length is less than the maximum.
    if (test(code) && size++ < limit) {
      effects.consume(code)
      return insideWhitespace
    }

    // end the whitespace sequence.
    options.type && effects.exit(options.type)
    return ok(code)
  }
}
