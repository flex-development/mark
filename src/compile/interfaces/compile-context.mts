/**
 * @file Interfaces - CompileContext
 * @module fsm/compile/interfaces/CompileContext
 */

import type {
  Buffer,
  Compile,
  CompileData,
  CompileResult,
  CompileResultMap,
  CompileValue,
  CompileValueMap,
  Config,
  Enter,
  Exit,
  Preprocess,
  Resume,
  StackedToken
} from '@flex-development/fsm/compile'
import type {
  Event,
  Point,
  SliceSerialize,
  Token
} from '@flex-development/fsm/parse'

/**
 * The base event compilation context.
 *
 * Event compilation consumes the {@linkcode Event}s of a parser to produce a
 * single {@linkcode CompileResult}.
 *
 * During compilation, event handlers orchestrate {@linkcode CompileValue}
 * creation, {@linkcode enter} those values onto the {@linkcode stack}, and
 * {@linkcode exit} them later.
 *
 * The compilation {@linkcode config} defines how {@linkcode Token} types map to
 * compilation behavior.
 * After the initial compilation, {@linkcode Transform}s can be applied to
 * manipulate the final compilation result.
 *
 * The compile context itself is both result and value agnostic.
 * Results and intermediate values may be syntax trees, strings, regular
 * expressions, or any other value.
 * {@linkcode CompileResultMap} and {@linkcode CompileValueMap} can be augmented
 * to support libraries and utilities that produce custom values and results.
 */
interface CompileContext {
  /**
   * Start capturing output into a temporary compilation value.
   *
   * Captured values can later be serialized with {@linkcode resume}.
   *
   * @see {@linkcode Buffer}
   */
  buffer: Buffer

  /**
   * Turn parser events into a compilation result.
   *
   * @see {@linkcode Compile}
   */
  compile: Compile

  /**
   * The compilation configuration.
   *
   * @see {@linkcode Config}
   */
  config: Config

  /**
   * The registry of tracked data.
   *
   * @see {@linkcode CompileData}
   */
  data: CompileData

  /**
   * Enter a value.
   *
   * @see {@linkcode Enter}
   */
  enter: Enter

  /**
   * Exit a value.
   *
   * @see {@linkcode Exit}
   */
  exit: Exit

  /**
   * The point before the first character in the content.
   *
   * @see {@linkcode Point}
   */
  from: Point

  /**
   * Prepare events and the initial result before compilation begins.
   *
   * @see {@linkcode Preprocess}
   */
  preprocess?: Preprocess | null | undefined

  /**
   * Stop {@linkcode buffer}ing and serialize the captured value.
   *
   * @see {@linkcode Resume}
   */
  resume: Resume

  /**
   * Get the text spanning the specified range.
   *
   * @see {@linkcode SliceSerialize}
   */
  sliceSerialize: SliceSerialize

  /**
   * The stack of values.
   *
   * When a value is entered it is pushed onto the stack. When a value is exited
   * it is removed from the stack. Most compilers use the stack to track
   * parent-child relationships between values.
   *
   * @see {@linkcode CompileValue}
   */
  stack: CompileValue[]

  /**
   * The stack of tokens.
   *
   * @see {@linkcode StackedToken}
   */
  tokenStack: StackedToken[]
}

export type { CompileContext as default }
