import type { CompileContext, Root } from '@flex-development/mark/ast'
import type unist from 'unist'

declare module '@flex-development/mark/ast' {
  interface ContextMap {
    mark: CompileContext
  }

  interface FragmentChildMap {
    mark: unist.Node
  }

  interface NodeMap {
    root: Root
  }
}
