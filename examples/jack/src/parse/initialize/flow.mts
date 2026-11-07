/**
 * @file Initialize - flow
 * @module examples/jack/parse/initialize/flow
 * @see https://github.com/micromark/micromark/blob/4.0.2/packages/micromark/dev/lib/initialize/flow.js
 */

import { factorySpace } from '@flex-development/mark-factory-space'
import { eol } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Effects,
  InitialConstruct,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import { ok as assert } from 'devlop'
import { blankLine, content } from 'micromark-core-commonmark'
import { types as tt } from 'micromark-util-symbol'

/**
 * The markdown flow construct.
 *
 * @const {InitialConstruct} flow
 */
const flow: InitialConstruct = { tokenize: tokenizeFlow }

export default flow

/**
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {State}
 *  The initial state
 */
function tokenizeFlow(this: TokenizeContext, effects: Effects): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  /**
   * The initial state.
   *
   * @const {State} initial
   */
  const initial: State = effects.attempt(
    // @ts-expect-error(2345): actually a mark-compatible construct.
    blankLine, // try to parse a blank line.
    atBlankEnding,
    effects.attempt(
      this.parser.constructs.flowInitial, // try to parse initial flow.
      afterFlow,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterFlow,
          // @ts-expect-error(2345): actually a mark-compatible construct.
          effects.attempt(content, afterFlow)
        ),
        tt.linePrefix
      )
    )
  )

  return initial

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function atBlankEnding(this: void, code: Code): State | undefined {
    if (code === codes.eos) return void effects.consume(code)
    assert(eol(code), 'expected eol')

    effects.enter(tt.lineEndingBlank)
    effects.consume(code)
    effects.exit(tt.lineEndingBlank)

    self.currentConstruct = undefined
    return initial
  }

  /**
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterFlow(this: void, code: Code): State | undefined {
    if (code === codes.eos) return void effects.consume(code)
    assert(eol(code), 'expected eol')

    effects.enter(tt.lineEnding)
    effects.consume(code)
    effects.exit(tt.lineEnding)

    self.currentConstruct = undefined
    return initial
  }
}
