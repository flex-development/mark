import type { ConstructRecord } from '@flex-development/mark/parse'
import type { Options } from '@flex-development/splat/parse'

declare module '@flex-development/mark/parse' {
  interface ContentTypeMap {
    literal: 'literal'
    pattern: 'pattern'
  }

  interface ContextMap {
    mark: TokenizeContext
  }

  interface Extension {
    bracketExpression?: ConstructRecord | null | undefined
    segment?: ConstructRecord | null | undefined
  }

  interface Token {
    /**
     * The value of the token.
     */
    value?: string | null | undefined
  }

  interface TokenFields {
    /**
     * Whether an `asterisk` token represents a globstar.
     */
    globstar?: boolean | null | undefined

    /**
     * Whether an `asterisk` or `questionMark` token represents a wildcard.
     */
    wildcard?: boolean | null | undefined
  }

  interface TokenTypeMap {
    asterisk: 'asterisk'
    bracketExpression: 'bracketExpression'
    bracketNegation: 'bracketNegation'
    characterClass: 'characterClass'
    characterClassValue: 'characterClassValue'
    chunkLiteral: 'chunkLiteral'
    collatingSymbol: 'collatingSymbol'
    collatingSymbolValue: 'collatingSymbolValue'
    controlCharacter: 'controlCharacter'
    data: 'data'
    eoc: 'eoc'
    equivalenceClass: 'equivalenceClass'
    equivalenceClassValue: 'equivalenceClassValue'
    escape: 'escape'
    escapeMarker: 'escapeMarker'
    escapeValue: 'escapeValue'
    lineEnding: 'lineEnding'
    literal: 'literal'
    patternNegation: 'patternNegation'
    questionMark: 'questionMark'
    rangeEnd: 'rangeEnd'
    rangeExpression: 'rangeExpression'
    rangeStart: 'rangeStart'
    segment: 'segment'
    separator: 'separator'
    whitespace: 'whitespace'
  }

  interface TokenizeContext extends Options {
    copyContainerState?: boolean | null | undefined
  }
}
