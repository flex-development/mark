/**
 * @file Interfaces - Options
 * @module mark-compiler/ast/interfaces/Options
 */

import type { FinalizeContext } from '@flex-development/mark-compiler/ast'
import type {
  Extensions,
  Postprocess,
  Preprocess,
  SerializeNode,
  TakeExtension
} from '@flex-development/mark/ast'
import type { Point } from '@flex-development/mark/parse'

/**
 * Options for configuring an event compiler.
 */
interface Options {
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
   * Handle the syntax tree before transforms are applied.
   *
   * @see {@linkcode Postprocess}
   */
  postprocess?: Postprocess | null | undefined

  /**
   * Prepare events and the initial tree before compilation begins.
   *
   * @see {@linkcode Preprocess}
   */
  preprocess?: Preprocess | null | undefined

  /**
   * Stringify a node.
   *
   * @see {@linkcode SerializeNode}
   *
   * @default String
   */
  serializeNode?: SerializeNode | null | undefined

  /**
   * Merge additional extension fields into the compiler configuration.
   *
   * @see {@linkcode TakeExtension}
   */
  takeExtension?: TakeExtension | null | undefined
}

export type { Options as default }
