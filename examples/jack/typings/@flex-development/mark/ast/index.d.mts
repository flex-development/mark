import type * as docast from '@flex-development/docast'
import type { Root } from '@flex-development/jack/ast'
import type { Node } from '@flex-development/mark/ast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'

declare module '@flex-development/mark/ast' {
  type JackNodes = InclusiveDescendant<Root>
  type Nodes = { [T in JackNodes['type']]: Extract<JackNodes, { type: T }> }

  interface CompileData {
    /**
     * Whether we're inside a comment.
     */
    comment?: boolean | null | undefined

    /**
     * Whether we're inside an object member.
     */
    member?: boolean | null | undefined
  }

  interface Config {
    /**
     * The list of node types where line endings are considered text.
     *
     * @see {@linkcode Node}
     *
     * @override
     */
    canContainEols: Node['type'][]
  }

  interface Extension {
    /**
     * The list of node types where line endings are considered text.
     *
     * @see {@linkcode Node}
     */
    canContainEols?: Node['type'][] | undefined
  }

  interface NodeMap
    extends Nodes, docast.CommentContentMap, docast.RootContentMap {}
}
