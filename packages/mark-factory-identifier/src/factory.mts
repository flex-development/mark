/**
 * @file factoryIdentifier
 * @module mark-factory-identifier/factory
 */

import { idContinue, idStart } from '@flex-development/mark-util-character'
import type {
  Code,
  Effects,
  State,
  TokenType
} from '@flex-development/mark/parse'

/**
 * Tokenize an identifier.
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
 * @param {State} nok
 *  The failed tokenization state
 * @param {TokenType | null | undefined} [type]
 *  The token type to capture the identifier as
 * @return {State}
 *  The initial state
 */
function factoryIdentifier(
  this: void,
  effects: Effects,
  ok: State,
  nok: State,
  type?: TokenType | null | undefined
): State {
  return startIdentifier

  /**
   * At the beginning of an identifier.
   *
   * The first identifier character must satisfy {@linkcode idStart}.
   *
   * @example
   *  ```markdown
   *  > |{ $schema: null }
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |{ _key: [] }
   *       ^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |{ key: 'value' }
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
  function startIdentifier(this: void, code: Code): State | undefined {
    if (!idStart(code)) return nok(code) // identifier cannot start.

    // start the identifier and capture the first character.
    type && effects.enter(type)
    effects.consume(code)

    // try continuing the identifier.
    return continueIdentifier
  }

  /**
   * Inside the identifier, after its first character.
   *
   * Identifier-continue characters are consumed until the first character that
   * does not satisfy {@linkcode idContinue}.
   * The identifier is then closed and tokenization succeeds without consuming
   * the current character.
   *
   * @example
   *  ```markdown
   *  > |{ $schema: null }
   *        ^^^^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |{ _key: [] }
   *        ^^^
   *  ```
   *
   * @example
   *  ```markdown
   *  > |{ key: 'value' }
   *        ^^
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function continueIdentifier(this: void, code: Code): State | undefined {
    // continue the identifier.
    if (idContinue(code)) return effects.consume(code), continueIdentifier

    // finish the identifier and delegate back to the parent construct.
    return type && effects.exit(type), ok(code)
  }
}

export default factoryIdentifier
