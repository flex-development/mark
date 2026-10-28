import type {} from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContentTypeMap {
    document: 'document'
  }

  interface TokenTypeMap {
    data: 'data'
  }
}
