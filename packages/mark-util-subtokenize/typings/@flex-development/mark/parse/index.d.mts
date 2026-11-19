import type { Create } from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContentTypeMap {
    test: 'test'
  }

  interface ParseContext {
    test: Create
  }

  interface Token {
    value?: string | null | undefined
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    lineEnding: 'lineEnding'
  }
}
