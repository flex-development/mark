import type { CompileContext } from '@flex-development/mark/compile'

declare module '@flex-development/mark/compile' {
  interface CompileData {
    flowCodeInside?: boolean | null | undefined
  }

  interface CompileValueMap {
    undefined: undefined
  }

  interface ContextMap {
    mark: CompileContext
  }
}
