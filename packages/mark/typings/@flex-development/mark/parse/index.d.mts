import type { TokenizeContext } from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContentTypeMap {
    mark: 'mark'
  }

  interface ContextMap {
    mark: TokenizeContext
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
  }
}
