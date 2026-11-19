/**
 * @file Interfaces - Options
 * @module examples/jack/compile/interfaces/Options
 */

import type {
  CreateExtensions,
  Extension
} from '@flex-development/mark/ast'
import type { List } from '@flex-development/mark/core'
import type { Point, PreprocessOptions } from '@flex-development/mark/parse'

/**
 * Tree creation options.
 *
 * @see {@linkcode PreprocessOptions}
 *
 * @extends {PreprocessOptions}
 */
interface Options extends PreprocessOptions {
  /**
   * The list of AST extensions to apply.
   *
   * Extensions are mainly used to change how token types are turned into nodes.
   *
   * @see {@linkcode CreateExtensions}
   * @see {@linkcode Extension}
   * @see {@linkcode List}
   */
  extensions?:
    | CreateExtensions
    | List<Extension | List<Extension>>
    | null
    | undefined

  /**
   * The point before the first character in the content.
   *
   * Node positions will be relative to this point.
   *
   * @see {@linkcode Point}
   *
   * @default
   *  { column: 1, line: 1, offset: 0 }
   */
  from?: Point | null | undefined
}

export type { Options as default }
