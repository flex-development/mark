import type { CompileContext, Root } from '@flex-development/mark/ast'

declare module '@flex-development/mark/ast' {
  interface ContextMap {
    mark: CompileContext
  }

  interface NodeMap {
    root: Root
  }
}
