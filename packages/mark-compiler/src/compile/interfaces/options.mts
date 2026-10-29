/**
 * @file Interfaces - Options
 * @module mark-compiler/compile/interfaces/Options
 */

import type {
  Enterer,
  Exiter,
  FinalizeContext
} from '@flex-development/mark-compiler/compile'
import type {
  Buffer,
  Extensions,
  InitializeResult,
  SerializeValue,
  TakeExtension
} from '@flex-development/mark/compile'
import type { Point } from '@flex-development/mark/parse'

/**
 * Options for configuring an event compiler.
 */
interface Options {
  /**
   * Start capturing output into a temporary compilation value.
   *
   * @see {@linkcode Buffer}
   */
  buffer: Buffer

  /**
   * Enter a compilation value.
   *
   * The factory will handle updating stacks.
   *
   * @see {@linkcode Enterer}
   */
  enter: Enterer

  /**
   * Exit a compilation value.
   *
   * The factory will handle updating stacks.
   *
   * @see {@linkcode Exiter}
   */
  exit: Exiter

  /**
   * An extension, list of extensions,
   * or a function returning the extensions to apply.
   *
   * @see {@linkcode Extensions}
   */
  extensions?: Extensions | null | undefined

  /**
   * Finalize the compilation context.
   *
   * @see {@linkcode FinalizeContext}
   */
  finalizeContext?: FinalizeContext | null | undefined

  /**
   * The point before the first character in the content.
   *
   * @see {@linkcode Point}
   *
   * @default
   *  { column: 1, line: 1, offset: 0 }
   */
  from?: Point | null | undefined

  /**
   * Create the initial compilation result.
   *
   * @see {@linkcode InitializeResult}
   */
  initialize: InitializeResult

  /**
   * Stringify a compilation value.
   *
   * @see {@linkcode SerializeValue}
   *
   * @default String
   */
  serializeValue?: SerializeValue | null | undefined

  /**
   * Merge additional extension fields into the compiler configuration.
   *
   * @see {@linkcode TakeExtension}
   */
  takeExtension?: TakeExtension | null | undefined
}

export type { Options as default }
