import type {} from '@flex-development/fsm/parse'

declare module '@flex-development/fsm/parse' {
  interface ContentTypeMap {
    document: 'document'
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
  }
}
