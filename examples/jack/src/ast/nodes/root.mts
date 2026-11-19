/**
 * @file Nodes - Root
 * @module examples/jack/ast/nodes/Root
 */

import type { Data, Parent, RootContent } from '@flex-development/jack/ast'

/**
 * Info associated with source files and source file fragments.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface RootData extends Data {}

/**
 * A source file fragment or an entire source file.
 *
 * > 👉 **Note**: Should be used as the root of a [*tree*][tree].\
 * > Must not be used as a [*child*][child].
 *
 * [child]: https://github.com/syntax-tree/unist#child
 * [tree]: https://github.com/syntax-tree/unist#tree
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Root extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode RootContent}
   *
   * @override
   */
  children: RootContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RootData}
   *
   * @override
   */
  data?: RootData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'root'
}

export type { Root as default, RootData }
