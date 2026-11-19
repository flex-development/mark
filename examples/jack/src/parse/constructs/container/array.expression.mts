/**
 * @file Constructs - arrayExpression
 * @module examples/jack/parse/constructs/arrayExpression
 */

import { tt } from '@flex-development/jack/symbol'
import { eos } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  ContinuableConstruct,
  Effects,
  Event,
  PartialConstruct,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

/**
 * The array expression construct.
 *
 * @const {ContinuableConstruct} arrayExpression
 */
const arrayExpression: ContinuableConstruct = {
  continuation: { tokenize: tokenizeArrayExpressionContinuation },
  exit: exitArrayExpression,
  tokenize: tokenizeArrayExpression
}

export default arrayExpression

/**
 * The array expression closer construct.
 *
 * @const {PartialConstruct} arrayExpressionCloser
 */
const arrayExpressionCloser: PartialConstruct = {
  partial: true,
  tokenize: tokenizeArrayExpressionCloser
}

/**
 * Exit an array expression.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {undefined}
 */
function exitArrayExpression(
  this: TokenizeContext,
  effects: Effects
): undefined {
  assert(this.containerState, 'expected `containerState` inside expression')
  assert(this.containerState.phase, 'expected container expression `phase`')

  /**
   * The closed token.
   *
   * @const {Token} token
   */
  const token: Token = effects.exit(tt.arrayExpression)

  // signal malformed expression.
  if (this.containerState.malformed) token.malformed = true

  // signal sparse array.
  if (this.containerState.sparse) token.sparse = true

  // signal trailing separator.
  if (this.containerState.phase === 'afterSeparator') {
    /**
     * The last value separator.
     *
     * @const {Event | undefined} separator
     */
    const separator: Event | undefined = this.events.findLast(event => {
      return event[1].type === tt.valueSeparator
    })

    assert(separator, 'expected `valueSeparator` event')
    separator[1].trailing = true
  }

  return void token
}

/**
 * Tokenize an array expression.
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
function tokenizeArrayExpression(
  this: TokenizeContext,
  effects: Effects,
  ok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  return startArray

  /**
   * Start an array expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startArray(this: void, code: Code): State | undefined {
    assert(
      code === codes.leftSquareBracket,
      'expected `codes.leftSquareBracket`'
    )

    assert(self.containerState, 'expected `containerState` inside expression')

    // enter the array expression.
    effects.enter(tt.arrayExpression)

    // capture the opening marker.
    effects.enter(tt.arrayMarker, { _open: true })
    effects.consume(code)
    effects.exit(tt.arrayMarker)

    // initialize container phase.
    self.containerState.phase = 'initial'

    // delegate back to the `language` initializer.
    return ok
  }
}

/**
 * Continue tokenizing an array expression.
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
function tokenizeArrayExpressionContinuation(
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

  return continueArray

  /**
   * Try continuing the current array expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function continueArray(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')

    // at end of stream.
    if (eos(code)) {
      self.containerState.malformed = true
      return nok(code)
    }

    // capture a value separator.
    if (code === codes.comma) {
      assert(self.containerState.phase, 'expected container expression `phase`')

      // array contains a sparse element.
      // a value was expected, but a separator was encountered.
      if (self.containerState.phase !== 'afterValue') {
        self.containerState.sparse = true
      }

      // capture the separator.
      effects.enter(tt.valueSeparator)
      effects.consume(code)
      effects.exit(tt.valueSeparator)

      // move onto the next phase.
      self.containerState.phase = 'afterSeparator'

      // delegate back to the `language` initializer.
      return ok
    }

    // try capturing the current array expression closer.
    // on success, mark the expression container for closure.
    // on failure, delegate back to the `language` initializer.
    return effects.attempt(arrayExpressionCloser, closeExpression, ok)(code)
  }

  /**
   * Mark the expression container for closure.
   *
   * Container finalization is deferred to the `language` initializer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function closeExpression(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')
    self.containerState._closeFlow = true
    return ok(code)
  }
}

/**
 * Tokenize an array expression closer.
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
function tokenizeArrayExpressionCloser(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return startArrayCloser

  /**
   * Try capturing an array expression closer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startArrayCloser(this: void, code: Code): State | undefined {
    // cannot be a closer.
    if (code !== codes.rightSquareBracket) return nok(code)

    // capture the closing marker.
    effects.enter(tt.arrayMarker, { _close: true })
    effects.consume(code)
    effects.exit(tt.arrayMarker)
    return ok
  }
}
