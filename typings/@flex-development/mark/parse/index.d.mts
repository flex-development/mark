import type {
  Code,
  ContentType,
  Context,
  Token,
  TokenizeContext
} from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContainerState {
    marker?: Code | undefined
  }

  interface ContentTypeMap {
    document: 'document'
  }

  interface ContextMap {
    mark: TokenizeContext
  }

  interface TokenFields {
    /**
     * The connected tokenizer.
     *
     * Typically used when dealing with linked tokens; a child tokenizer is
     * usually needed to tokenize them.
     *
     * @see {@linkcode Context}
     */
    _tokenizer?: Context | null | undefined

    /**
     * Declare the token as having content of a certain type.
     *
     * @see {@linkcode ContentType}
     */
    contentType?: ContentType | null | undefined

    /**
     * The next token in a list of linked tokens.
     *
     * @see {@linkcode Token}
     */
    next?: Token | null | undefined

    /**
     * The previous token in a list of linked tokens.
     *
     * @see {@linkcode Token}
     */
    previous?: Token | null | undefined
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
    null: 'null'
  }
}
