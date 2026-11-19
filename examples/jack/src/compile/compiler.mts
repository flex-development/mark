/**
 * @file compiler
 * @module examples/jack/compile/compiler
 */

import type { Options } from '@flex-development/jack/compile'
import { createCompiler } from '@flex-development/mark-compiler/ast'
import type {
  Compile,
  CompileContext,
  Config,
  Extension,
  Node
} from '@flex-development/mark/ast'
import { ok } from 'devlop'
import { toString } from 'mdast-util-to-string'
import comments from './extensions/comments.mts'
import expressions from './extensions/expressions.mts'

export default compiler

/**
 * Create a jack compiler.
 *
 * > 👉 The compiler only understands complete buffering, not streaming.
 *
 * @this {void}
 *
 * @param {Options | null | undefined} [options]
 *  The configuration options
 * @return {Compile}
 *  The jack compiler
 */
function compiler(this: void, options?: Options | null | undefined): Compile {
  /**
   * The event compilation context.
   *
   * @const {CompileContext} context
   */
  const context: CompileContext = createCompiler({
    extensions: [expressions, comments, options?.extensions ?? []],
    from: options?.from,
    serializeNode: toString,
    takeExtension
  })

  return context.compile

  /**
   * Merge `extension` into the `combined` configuration.
   *
   * @this {void}
   *
   * @param {Config} combined
   *  The current configuration
   * @param {Extension} extension
   *  The extension to merge
   * @param {keyof Extension | undefined} [field]
   *  The current `extension` field
   * @return {undefined}
   */
  function takeExtension(
    this: void,
    combined: Config,
    extension: Extension,
    field?: keyof Extension | undefined
  ): undefined {
    ok(field === 'canContainEols', 'expected field to be `\'canContainEols\'`')

    /**
     * The incoming extension field value.
     *
     * @var {unknown} right
     */
    let right: unknown

    // initialize the configuration field.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    combined[field] ??= []

    // merge the extension field value into the existing configuration.
    right = extension[field]
    if (right) combined[field].push(...right as Node['type'][])

    return void field
  }
}
