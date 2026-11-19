/**
 * @file Constructs - objectExpression
 * @module examples/jack/parse/constructs/objectExpression
 */

import stringExpression from '#constructs/scalar/string.expression'
import wc from '#constructs/wc'
import { tt } from '@flex-development/jack/symbol'
import factoryIdentifier from '@flex-development/mark-factory-identifier'
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
 * The object expression construct.
 *
 * @const {ContinuableConstruct} objectExpression
 */
const objectExpression: ContinuableConstruct = {
  continuation: { tokenize: tokenizeObjectExpressionContinuation },
  exit: exitObjectExpression,
  tokenize: tokenizeObjectExpression
}

export default objectExpression

/**
 * The object expression closer construct.
 *
 * @internal
 *
 * @const {PartialConstruct} objectExpressionCloser
 */
const objectExpressionCloser: PartialConstruct = {
  partial: true,
  tokenize: tokenizeObjectExpressionCloser
}

/**
 * The object field separator construct.
 *
 * @internal
 *
 * @const {PartialConstruct} objectFieldSeparator
 */
const objectFieldSeparator: PartialConstruct = {
  partial: true,
  tokenize: tokenizeObjectFieldSeparator
}

/**
 * The object field value start construct.
 *
 * @internal
 *
 * @const {PartialConstruct} objectFieldValueStart
 */
const objectFieldValueStart: PartialConstruct = {
  partial: true,
  tokenize: tokenizeObjectFieldValueStart
}

/**
 * The object member start construct.
 *
 * @internal
 *
 * @const {PartialConstruct} objectMemberStart
 */
const objectMemberStart: PartialConstruct = {
  partial: true,
  tokenize: tokenizeObjectMemberStart
}

/**
 * Exit an object expression.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {undefined}
 */
function exitObjectExpression(
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
  const token: Token = effects.exit(tt.objectExpression)

  // signal malformed expression.
  if (this.containerState.malformed) token.malformed = true

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
 * Tokenize an object expression.
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
function tokenizeObjectExpression(
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

  return startObject

  /**
   * Start an object expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startObject(this: void, code: Code): State | undefined {
    assert(code === codes.leftCurlyBrace, 'expected `codes.leftCurlyBrace`')
    assert(self.containerState, 'expected `containerState` inside expression')

    // start the object expression.
    effects.enter(tt.objectExpression)

    // capture the opening marker.
    effects.enter(tt.objectMarker, { _open: true })
    effects.consume(code)
    effects.exit(tt.objectMarker)

    // initialize container phase.
    self.containerState.phase = 'initial'

    // delegate back to the `language` initializer.
    return ok
  }
}

/**
 * Continue tokenizing an object expression.
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
function tokenizeObjectExpressionContinuation(
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

  // try capturing the start of an object member.
  // if successful, delegate back to the `language` initializer.
  // otherwise try continuing the current object expression.
  return effects.attempt(objectMemberStart, ok, continueObject)

  /**
   * Try continuing an object expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function continueObject(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')

    // at end of stream.
    if (eos(code)) {
      self.containerState.malformed = true
      return nok(code)
    }

    // capture a value separator or unexpected comma.
    // a comma is only a value separator after a value has been seen.
    // the comma is otherwise unexpected and the expression is malformed.
    if (code === codes.comma) {
      if (self.containerState.phase === 'afterValue') {
        effects.enter(tt.valueSeparator)
        effects.consume(code)
        effects.exit(tt.valueSeparator)
        self.containerState.phase = 'afterSeparator'
      } else {
        effects.enter(tt.unexpectedValue)
        effects.consume(code)
        effects.exit(tt.unexpectedValue)
        self.containerState.malformed = true
      }

      // delegate back to the `language` initializer.
      return ok
    }

    // try capturing the current object expression closer.
    // on success, mark the object expression for closure.
    // on failure, delegate back to the `language` initializer.
    return effects.attempt(objectExpressionCloser, closeExpression, ok)(code)
  }

  /**
   * Mark the object expression for closure.
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
 * Tokenize an object expression closer.
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
function tokenizeObjectExpressionCloser(
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

  return startObjectCloser

  /**
   * Try capturing an object expression closer.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startObjectCloser(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')

    // cannot be a closer.
    if (code !== codes.rightCurlyBrace) return nok(code)

    // capture the closing marker.
    effects.enter(tt.objectMarker, { _close: true })
    effects.consume(code)
    effects.exit(tt.objectMarker)

    // delegate back to the parent construct.
    return ok
  }
}

/**
 * Tokenize an object field separator.
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
function tokenizeObjectFieldSeparator(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return maybeFieldSeparator

  /**
   * Try capturing an object field separator.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeFieldSeparator(this: void, code: Code): State | undefined {
    // no separator.
    if (code !== codes.colon) return nok(code)

    // capture the field separator.
    effects.enter(tt.fieldSeparator)
    effects.consume(code)
    effects.exit(tt.fieldSeparator)

    // delegate back to the parent construct.
    return ok
  }
}

/**
 * Tokenize the start of an object field value.
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
function tokenizeObjectFieldValueStart(
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

  // try capturing whitespace and/or comments,
  // then check for the start of a new expression.
  return effects.attempt(wc, checkExpression, checkExpression)

  /**
   * Check for the start of an expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function checkExpression(this: void, code: Code): State | undefined {
    // check for the start of an expression.
    // succeed without consuming if an expression can start.
    // fail otherwise.
    return effects.check(self.parser.constructs.expression, ok, nok)(code)
  }
}

/**
 * Tokenize the start of an object member.
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
function tokenizeObjectMemberStart(
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
   * Whether the member is malformed.
   *
   * @var {boolean} malformed
   */
  let malformed: boolean = true

  /**
   * Whether the member has a value.
   *
   * @var {boolean} value
   */
  let value: boolean = false

  return startMember

  /**
   * Start an object member.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startMember(this: void, code: Code): State | undefined {
    effects.enter(tt.objectMember)
    return tryKey(code)
  }

  /**
   * Try capturing an object key.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryKey(this: void, code: Code): State | undefined {
    // first try capturing a string object key.
    // if the attempt fails, try capturing an identifier object key.
    // fail if the final key attempt fails.
    return effects.attempt(
      stringExpression,
      afterKey,
      factoryIdentifier(effects, afterKey, nok, tt.identifier)
    )(code)
  }

  /**
   * After an an object key.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterKey(this: void, code: Code): State | undefined {
    // try capturing whitespace and/or comments, then an object field separator.
    return effects.attempt(wc, tryFieldSeparator, tryFieldSeparator)(code)
  }

  /**
   * Try capturing an object field separator.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryFieldSeparator(this: void, code: Code): State | undefined {
    // try capturing an object field separator,
    // then check if an object field value can start.
    return effects.attempt(
      objectFieldSeparator,
      // after the object field separator.
      // check if the object member has a field value.
      // if so, close the wellformed member.
      // otherwise, finish the malformed member.
      effects.check(objectFieldValueStart, beforeWellformedClose, closeMember),
      // no object field separator.
      // check if an field separator is expected by checking for a field value.
      // if so, finish the malformed member.
      // fail otherwise.
      effects.check(objectFieldValueStart, beforeValuedClose, nok)
    )(code)
  }

  /**
   * Before closing a wellformed object member.
   *
   * The object member is partially wellformed because the object field value
   * has yet to be added to the member token span.\
   * When the next expression is closed, the `language` initializer will finish
   * building the object member.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeWellformedClose(this: void, code: Code): State | undefined {
    malformed = false
    return beforeValuedClose(code)
  }

  /**
   * Before closing an object member.
   *
   * > 👉 **Note**: If {@linkcode malformed} is `true`, the object member is
   * > missing a field separator, but has a field value.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeValuedClose(this: void, code: Code): State | undefined {
    value = true
    return closeMember(code)
  }

  /**
   * Exit the object member.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function closeMember(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` inside expression')
    assert(self.containerState.members, 'expected object `members` stack')

    /**
     * The closed object member token.
     *
     * @const {Token} token
     */
    const token: Token = effects.exit(tt.objectMember)

    // propagate malformed state to token and object expression.
    if (malformed) {
      token.malformed = malformed
      self.containerState.malformed = malformed
    }

    // update the object members stack
    // so the `language` initializer can add the field value to the member.
    // no need to stack the member if it does not have a field value.
    // stacked members may or may not be malformed.
    if (value) self.containerState.members.push([self.events.length - 1, token])

    return ok(code)
  }
}
