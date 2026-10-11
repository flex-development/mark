/**
 * @file Interfaces - CompileContext
 * @module mark/ast/interfaces/CompileContext
 */

import type {
  Buffer,
  Compile,
  CompileData,
  Config,
  Enter,
  Exit,
  Node,
  Preprocess,
  Resume,
  Transform,
  Tree
} from '@flex-development/mark/ast'
import type * as compile from '@flex-development/mark/compile'
import type { Event, Token } from '@flex-development/mark/parse'

/**
 * The event compilation context.
 *
 * Event compilation consumes the {@linkcode Event}s of a parser to produce a
 * syntax {@linkcode Tree}.
 *
 * During compilation, event handlers orchestrate {@linkcode Node}
 * creation, {@linkcode enter} nodes onto the {@linkcode stack}, and
 * {@linkcode exit} them later.
 *
 * The compilation {@linkcode config} defines how {@linkcode Token} types map to
 * compilation behavior.
 * After the initial compilation, {@linkcode Transform}s can be applied to
 * manipulate the final compilation result.
 *
 * This compile context API is optimized for producing syntax trees.
 * Compilation results are syntax trees and intermediate values are nodes.
 * {@linkcode NodeMap} can be augmented to support custom libraries.
 *
 * > 👉 **Note**: Import `@flex-development/mark/ast/compile` to register nodes
 * > and trees with the base compilation protocol.
 *
 * @see {@linkcode compile.CompileContext}
 *
 * @extends {compile.CompileContext}
 */
interface CompileContext extends compile.CompileContext {
  /**
   * Start capturing output into a temporary compilation value.
   *
   * Captured values can later be serialized with {@linkcode resume}.
   *
   * @see {@linkcode Buffer}
   *
   * @override
   */
  buffer: Buffer

  /**
   * Turn parser events into a syntax {@linkcode Tree}.
   *
   * @see {@linkcode Compile}
   *
   * @override
   */
  compile: Compile

  /**
   * The compilation configuration.
   *
   * @see {@linkcode Config}
   *
   * @override
   */
  config: Config

  /**
   * The registry of tracked data.
   *
   * @see {@linkcode CompileData}
   *
   * @override
   */
  data: CompileData

  /**
   * Enter a node.
   *
   * @see {@linkcode Enter}
   *
   * @override
   */
  enter: Enter

  /**
   * Exit a node.
   *
   * @see {@linkcode Exit}
   *
   * @override
   */
  exit: Exit

  /**
   * Preprocess events before turning them into a syntax tree.
   *
   * @see {@linkcode Preprocess}
   *
   * @override
   */
  preprocess?: Preprocess | null | undefined

  /**
   * Stop {@linkcode buffer}ing and serialize the captured value.
   *
   * @see {@linkcode Resume}
   *
   * @override
   */
  resume: Resume

  /**
   * The node stack.
   *
   * @see {@linkcode Node}
   *
   * @override
   */
  stack: Node[]
}

export type { CompileContext as default }
