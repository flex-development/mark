/**
 * @file Constructs - language
 * @module examples/jack/parse/initialize/language
 */

import wc from '#constructs/wc'
import { tt } from '@flex-development/jack/symbol'
import { eos, streamBreak } from '@flex-development/mark-util-character'
import { splice } from '@flex-development/mark-util-chunked'
import type {
  Code,
  Construct,
  ContainerState,
  Effects,
  InitialConstruct,
  Place,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'

/**
 * The initial source language construct.
 *
 * @const {InitialConstruct} language
 */
const language: InitialConstruct = { tokenize: tokenizeLanguage }

export default language

/**
 * Tokenize source language content.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {State}
 *  The initial state
 */
function tokenizeLanguage(this: TokenizeContext, effects: Effects): State {
  /**
   * An expression and its persistent state.
   *
   * This is a tuple where the first value is an expression construct and the
   * second value is its persistent container state.
   */
  type Expression = [construct: Construct, state: ContainerState]

  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  /**
   * The open expression stack.
   *
   * @const {Expression[]} stack
   */
  const stack: Expression[] = []

  /**
   * The stream position before the current `continuation` attempt.
   *
   * The position is compared with the position after a successful continuation
   * to determine whether the continuation consumed any input.
   *
   * @var {Place | undefined} then
   */
  let then: Place | undefined

  /**
   * The current unexpected value.
   *
   * @var {Token | undefined} unexpectedValue
   */
  let unexpectedValue: Token | undefined

  return start

  /**
   * Start or resume scanning source language content.
   *
   * Whitespace and comments are handled before attempting to enter a new
   * expression or continue an open expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function start(this: void, code: Code): State | undefined {
    restate() // initialize container state.

    // inside a comment.
    if (streamBreak(code)) return beforeSpaceOrComment(code)

    // at least one expression on stack.
    // check for whitespace and comments
    // before trying to continue the active expression.
    if (stack.length) {
      return effects.check(wc, beforeSpaceOrComment, tryContinuation)(code)
    }

    // no expression on stack.
    // check for whitespace and comments before checking for a new expression.
    return effects.check(wc, beforeSpaceOrComment, checkExpression)(code)
  }

  /**
   * Before unicode whitespace or a comment.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeSpaceOrComment(this: void, code: Code): State | undefined {
    // close the current unexpected value.
    if (unexpectedValue) {
      effects.exit(unexpectedValue.type)
      unexpectedValue = undefined
    }

    // at least one expression on stack.
    // capture whitespace or a comment before trying
    // to continue the active expression.
    if (stack.length) return effects.attempt(wc, tryContinuation)(code)

    // no expression on stack.
    // capture whitespace or a comment before checking for a new expression.
    return effects.attempt(wc, checkExpression)(code)
  }

  /**
   * Check for a new expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function checkExpression(this: void, code: Code): State | undefined {
    restate() // get ready for a new expression.

    // check for a new expression.
    // if successful, prepare to enter a new expression.
    // on failure, start or continue an unexpected value.
    return effects.check(
      self.parser.constructs.expression,
      beforeExpression,
      unexpected
    )(code)
  }

  /**
   * Before a new expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function beforeExpression(this: void, code: Code): State | undefined {
    // close the current unexpected value.
    if (unexpectedValue) {
      effects.exit(unexpectedValue.type)
      unexpectedValue = undefined
    }

    // get ready for the new expression.
    restate()

    // start a new expression.
    // no failure state needed, expression start has already been confirmed.
    return effects.attempt(
      self.parser.constructs.expression,
      takeExpression
    )(code)
  }

  /**
   * Register a new expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function takeExpression(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState`')
    assert(self.currentConstruct, 'expected `currentConstruct`')
    assert(!unexpectedValue, 'did not expect unexpected value')

    if (stack.length) {
      /**
       * The parent expression.
       *
       * @const {Expression} parent
       */
      const parent: Expression = stack[stack.length - 1]!

      assert(parent[1].members, 'expected object members stack')

      // the new expression is the field value of the active object member.
      if (parent[1].members.length) {
        parent[1].members.at(-1)![2] ??= self.containerState
      }

      // check if a container expression is missing a separator.

      // malformed container expression.
      // a separator was expected, but is missing.
      if (parent[1].phase === 'afterValue') parent[1].malformed = true

      // parent expression just opened, or a separator was just seen.
      assert(parent[1].phase !== undefined)
      parent[1].phase = 'afterValue'
    }

    // register the new expression.
    stack.push([self.currentConstruct, self.containerState])

    // no continuation to attempt.
    if (!self.currentConstruct.continuation) return noContinuation(code)

    // try capturing whitespace and/or comments before resuming scanning.
    return effects.attempt(wc, start, start)(code)
  }

  /**
   * Try continuing the active expression.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryContinuation(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` when continuing')
    assert(stack.length, 'expected at least `1` expression on stack')
    const [construct, containerState] = stack[stack.length - 1]!

    // restore the active expression's persistent state.
    // this ensures continuation runs against its own state.
    self.containerState = containerState

    // capture the current place before attempting continuation.
    // this is used to determine if continuation consumed any input.
    then = self.now()

    // try continuing the active expression.
    assert(construct.continuation, 'expected continuable construct')
    return effects.attempt(
      construct.continuation,
      afterContinuation,
      noContinuation
    )(code)
  }

  /**
   * After a successful continuation.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterContinuation(this: void, code: Code): State | undefined {
    assert(self.containerState, 'expected `containerState` after continuing')
    assert(then, 'expected `then` after continuing')

    // immediate container closure requested.
    if (self.containerState._closeFlow) {
      delete self.containerState._closeFlow
      return noContinuation(code)
    }

    /**
     * The current place in the content.
     *
     * @const {Place} now
     */
    const now: Place = self.now()

    // continuation succeeded without consuming input.
    // check for a new expression at the current point in the stream.
    if (
      then.line === now.line &&
      then.column === now.column &&
      then.offset === now.offset &&
      then._bufferIndex === now._bufferIndex &&
      then._index === now._index
    ) {
      return effects.attempt(wc, checkExpression, checkExpression)(code)
    }

    // continuation succeeded and consumed input.
    return start(code) // resume scanning normally.
  }

  /**
   * Resume scanning when an expression can no longer continue.
   *
   * The active expression is finalized before scanning resumes.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function noContinuation(this: void, code: Code): State | undefined {
    flush() // finalize the active expression.
    return start(code)
  }

  /**
   * Finish the stream.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {undefined}
   */
  function end(this: void, code: Code): undefined {
    assert(eos(code), 'expected end of stream')

    // finalize all open expression containers.
    flush(stack.length)

    // emit end of content.
    // this is the final event and token.
    effects.enter(tt.eoc)
    effects.consume(code)
    effects.exit(tt.eoc)

    return void code
  }

  /**
   * Finalize open expression containers.
   *
   * @this {void}
   *
   * @param {number | undefined} [count=1]
   *  The number of expression containers to close
   * @return {undefined}
   */
  function flush(this: void, count: number | undefined = 1): undefined {
    /**
     * The number of expression containers finalized.
     *
     * @var {number} k
     */
    let k: number = 0

    // close the current unexpected value.
    if (unexpectedValue) {
      effects.exit(unexpectedValue.type)
      unexpectedValue = undefined
    }

    // call the exit hook on each expression container.
    while (++k <= count) {
      assert(stack[stack.length - k], 'expected `stack[stack.length - k]`')
      const [construct, containerState] = stack[stack.length - k]!
      assert(containerState.members, 'expected object `members` stack')

      self.containerState = containerState
      construct.exit?.call(self, effects)

      // finalize the active object member.
      if (containerState.members.at(-1)?.[2] === containerState) {
        const [exitIndex, member] = containerState.members.pop()!

        // fix end position of the object member and its `exit` event position.
        member.end = self.now()
        self.events.push(...splice(self.events, exitIndex, 1))
      }
    }

    // remove closed expressions from the stack.
    stack.length -= count
    return void count
  }

  /**
   * Capture an unexpected character.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function unexpected(this: void, code: Code): State | undefined {
    // at end of stream.
    if (eos(code)) return void end(code)

    // add to the current unexpected value and resume scanning.
    if (unexpectedValue) return effects.consume(code), start

    // capture the first unexpected character.
    unexpectedValue = effects.enter(tt.unexpectedValue)
    effects.consume(code)

    // resume scanning.
    return start
  }

  /**
   * Reset container state.
   *
   * The active `members` stack is retained after reset.
   *
   * @this {void}
   *
   * @return {undefined}
   */
  function restate(this: void): undefined {
    const { members = [] } = self.containerState ?? {}

    // get ready for the next expression.
    self.containerState = {}

    // re-expose the active object members stack.
    self.containerState.members = members

    return void self.containerState
  }
}
