import type * as docmark from '@flex-development/docmark-util-types'
import type { ContainerPhase } from '@flex-development/jack/parse'
import type {
  ConstructRecord,
  Disable,
  Place,
  Settings
} from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContainerState extends docmark.ContainerState {
    /**
     * For comments, the token representing the active comment.
     *
     * The comment token is captured at the `comments` level after a new comment
     * has just been entered.\
     * The token is extracted from the first event produced by the current
     * comment construct.
     *
     * @see {@linkcode Token}
     */
    comment?: Token | undefined

    /**
     * Whether syntax is malformed.
     */
    malformed?: boolean | null | undefined

    /**
     * Whether markdown indentation was is active.
     *
     * This is used to protect indentation that should be parsed as markdown,
     * i.e. line prefixes inside indented code.
     */
    markdownIndent?: boolean | undefined

    /**
     * The object member stack.
     *
     * Each item is a tuple where the first value is the original `exit` event
     * index of the object member, the second value is the object member token,
     * and the last value is the persistent state of the member's field value.
     *
     * @see {@linkcode Token}
     */
    members?: [number, Token, ContainerState?][] | undefined

    /**
     * For comments, the token representing the comment opener.
     *
     * By default, this is a `commentOpener` token.
     *
     * Comment openers are a specific sequence of markers (non-`null` character
     * codes), unique to the surrounding source language, used to signal the
     * beginning of a comment.
     *
     * Marker sequences for block comment openers are unique in comparison to
     * their comment closer and comment line sequences.
     *
     * For line comments, the beginning sequence *is* the comment opener.\
     * Further sequences are considered part of the current comment line prefix.
     *
     * @see {@linkcode Token}
     */
    opener?: Token | undefined

    /**
     * The width of the comment opener ({@linkcode ContainerState.opener}).
     *
     * Opener width is the difference between `end` and `start` columns.
     *
     * Before any whitespace can be treated as a marker sequence, a line
     * comment's candidate line must have leading comment padding that ends
     * directly below the active opener. For block comments, leading comment
     * padding must align with the middle marker of the active opener. After
     * accounting for opener alignment, at least one whitespace is required to
     * form the line's indent.
     */
    openerWidth?: number | undefined

    /**
     * The current container expression phase.
     *
     * @see {@linkcode ContainerPhase}
     */
    phase?: ContainerPhase

    /**
     * For array expressions, whether a sparse element was encountered.
     */
    sparse?: boolean | null | undefined
  }

  interface ContentTypeMap extends docmark.ContentTypeMap {
    comments: never
    source: 'source'
    type: never
  }

  interface Extension {
    attentionMarkers?: docmark.AttentionMarkers | undefined
    comments?: ConstructRecord | undefined
    contentInitial?: ConstructRecord | undefined
    disable?: Disable | undefined
    expression?: ConstructRecord | undefined
    flowInitial?: ConstructRecord | undefined
    insideSpan?: docmark.InsideSpan | undefined
    settings?: Settings | undefined
    source?: null | undefined
  }

  interface ParseContext extends docmark.ParseContext {
    /**
     * Whether a comment is not allowed at the current position.
     */
    skipComment?: boolean | null | undefined
  }

  interface Token extends docmark.Token {
    /**
     * Whether syntax is malformed.
     */
    malformed?: boolean | null | undefined

    /**
     * For array expressions, whether a sparse element was encountered.
     */
    sparse?: boolean | null | undefined

    /**
     * For value separators, whether the separator is trailing.
     */
    trailing?: boolean | null | undefined

    /**
     * The string value of the token.
     */
    value?: string | null | undefined
  }

  interface TokenFields extends docmark.TokenFields {}

  interface TokenTypeMap extends docmark.TokenTypeMap {
    arrayExpression: 'arrayExpression'
    arrayMarker: 'arrayMarker'
    booleanExpression: 'booleanExpression'
    escapeMarker: 'escapeMarker'
    fieldSeparator: 'fieldSeparator'
    hexEscape: 'hexEscape'
    hexEscapeValue: 'hexEscapeValue'
    identifier: 'identifier'
    nulEscape: 'nulEscape'
    nulEscapeValue: 'nulEscapeValue'
    nullExpression: 'nullExpression'
    numberExpression: 'numberExpression'
    objectExpression: 'objectExpression'
    objectMarker: 'objectMarker'
    objectMember: 'objectMember'
    operand: 'operand'
    signOperator: 'signOperator'
    stringExpression: 'stringExpression'
    stringMarker: 'stringMarker'
    unexpectedValue: 'unexpectedValue'
    unicodeEscape: 'unicodeEscape'
    unicodeEscapeValue: 'unicodeEscapeValue'
    unsignedNumber: 'unsignedNumber'
    valueSeparator: 'valueSeparator'
  }

  interface TokenizeContext {
    /**
     * Whether concrete markdown was detected.
     *
     * Concrete constructs cannot be interrupted by other constructs.
     */
    concrete?: boolean | undefined

    /**
     * The current place in the content.
     *
     * @see {@linkcode Place}
     *
     * @internal
     * @readonly
     */
    readonly place: Place
  }
}
