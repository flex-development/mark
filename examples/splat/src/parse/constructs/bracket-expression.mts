/**
 * @file Constructs - bracketExpression
 * @module examples/splat/parse/constructs/bracketExpression
 */

import { eos } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Code,
  Effects,
  NamedConstruct,
  State,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'
import { constants, tt } from '@flex-development/splat/symbol'
import { ok as assert } from 'devlop'

/**
 * The bracket expression construct.
 *
 * Bracket expressions match any one of the enclosed characters.
 *
 * Two characters separated by a hyphen (`-`) denotes a *range expression*; any
 * character that falls between those two characters, inclusive, using the
 * current locale’s collating sequence and character set, matches.
 *
 * If the first character following the opener (`[`) is a caret (`^`) or an
 * exclamation point (`!`), then any character not within the range matches.
 *
 * To match a hyphen (`-`), include it as the first or last character in the
 * set. To match a closing bracket (`]`), include it as the first character in
 * the set.
 *
 * @see {@linkcode NamedConstruct}
 *
 * @const {NamedConstruct} bracketExpression
 */
const bracketExpression: NamedConstruct = {
  name: tt.bracketExpression,
  tokenize: tokenizeBracketExpression
}

export default bracketExpression

/**
 * Tokenize a bracket expression.
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
function tokenizeBracketExpression(
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
   * The previous chunk token.
   *
   * @var {Token | undefined} previous
   */
  let previous: Token | undefined

  /**
   * Whether a value has been seen inside the bracket expression.
   *
   * This prevents:
   *
   * ```markdown
   * > | []
   * > | [!]
   * ```
   *
   * from being treated as valid expressions, while allowing:
   *
   * ```markdown
   * > | []]
   * > | [!]]
   * ```
   *
   * where `]` is the first literal value.
   *
   * @var {boolean} valueSeen
   */
  let valueSeen: boolean = false

  return bracketExpression

  /**
   * At the beginning of a bracket expression.
   *
   * @example
   *  ```markdown
   *  > | [abc]
   *      ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | src/**index.[cm]ts
   *                  ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function bracketExpression(this: void, code: Code): State | undefined {
    assert(
      code === codes.leftSquareBracket,
      'expected `codes.leftSquareBracket`'
    )

    // consume the opening marker.
    effects.enter(tt.bracketExpression)
    effects.consume(code)

    // check for a negation marker.
    return maybeNegation
  }

  /**
   * At a negation marker.
   *
   * @example
   *  ```markdown
   *  > | [!]
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [!abc]
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > | [^xyz]
   *       ^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function maybeNegation(this: void, code: Code): State | undefined {
    if (code === codes.caret || code === codes.exclamationMark) {
      effects.enter(tt.bracketNegation)
      effects.consume(code)
      effects.exit(tt.bracketNegation)
      return tryContent
    }

    return tryContent(code)
  }

  /**
   * Try constructs registered at the `bracketExpression` content level.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function tryContent(this: void, code: Code): State | undefined {
    return effects.attempt(
      self.parser.constructs.bracketExpression,
      afterContent,
      chunkLiteral
    )(code)
  }

  /**
   * After structured content.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterContent(this: void, code: Code): State | undefined {
    return valueSeen = true, tryContent(code)
  }

  /**
   * Try starting a new literal chunk.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function chunkLiteral(this: void, code: Code): State | undefined {
    // at end of stream.
    if (eos(code)) return nok(code)

    // a right square bracket closes the expression
    // only after at least one value has been seen.
    if (code === codes.rightSquareBracket && valueSeen) {
      effects.consume(code)
      effects.exit(tt.bracketExpression)
      return ok
    }

    // start the literal container.
    effects.enter(tt.literal)

    /**
     * The new chunk token.
     *
     * @const {Token} token
     */
    const token: Token = effects.enter(tt.chunkLiteral, {
      contentType: constants.contentTypeLiteral,
      previous
    })

    // link the tokens together.
    token.previous = previous
    if (previous) previous.next = token
    previous = token

    effects.consume(code)
    effects.exit(tt.chunkLiteral)
    effects.exit(tt.literal)

    // retry bracket expression content.
    return valueSeen = true, tryContent
  }
}
