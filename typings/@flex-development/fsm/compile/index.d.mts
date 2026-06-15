import type {} from '@flex-development/fsm/compile'
import type unist from 'unist'

declare module '@flex-development/fsm/compile' {
  interface CompileData {
    flowCodeInside?: boolean | null | undefined
  }

  interface CompileResultMap {
    tree: unist.Parent
  }

  interface CompileValueMap {
    node: unist.Node
  }
}
