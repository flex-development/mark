import type { Store } from '@flex-development/mark-parser'
import type {
  ApplySkip,
  Chunk,
  Column,
  Effects,
  Line,
  Place
} from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContentTypeMap {
    comments: 'comments'
    language: 'language'
    source: 'source'
  }

  interface ContextMap {
    mark: TokenizeContext
  }

  interface TokenFields {
    value?: string | null | undefined
  }

  interface TokenizeContext {
    /**
     * Move {@linkcode place} a bit forward.
     *
     * @see {@linkcode ApplySkip}
     *
     * @internal
     */
    applySkip: ApplySkip

    /**
     * The list of chunks.
     *
     * @see {@linkcode Chunk}
     *
     * @internal
     */
    chunks: Chunk[]

    /**
     * When storing internal state, whether to create a copy
     * of the current `containerState`.
     * By default, {@linkcode structuredClone} is used to make a deep copy.
     *
     * If `true`, mutations made to the `containerState` during speculative
     * checks will **not** be propagated after a restore.
     */
    copyContainerState?: boolean | null | undefined

    /**
     * The context object used to transition the state machine.
     *
     * @see {@linkcode Effects}
     *
     * @internal
     * @readonly
     */
    readonly effects: Effects

    /**
     * The current place in the content.
     *
     * @see {@linkcode Place}
     *
     * @internal
     * @readonly
     */
    readonly place: Place

    /**
     * Record, where each key is a line number and each value a column to be
     * skipped to when the tokenizer has reached that line.
     *
     * @see {@linkcode Column}
     * @see {@linkcode Line}
     *
     * @internal
     */
    readonly skips: Record<Line, Column>

    /**
     * Store internal state.
     *
     * @see {@linkcode Store}
     *
     * @internal
     */
    store: Store
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
  }
}
