import type { CompileContext } from '@flex-development/mark/compile'

declare module '@flex-development/mark/compile' {
  interface CompileData {
    flowCodeInside?: boolean | null | undefined
  }

  interface ContextMap {
    mark: CompileContext
  }
}
