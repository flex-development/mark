import type { ConstructRecord, Place } from '@flex-development/mark/parse'
import type * as micromark from 'micromark-util-types'

declare module '@flex-development/mark/parse' {
  type AttentionMarkers = { null?: Marker[] | null | undefined }

  interface ContainerState extends micromark.ContainerState {
    /**
     * For array expressions, the current array nesting depth.
     *
     * The first array expression marker in the content establishes a nesting
     * depth of one. Nested left square brackets increase the depth, while right
     * square brackets decrease it.\
     * An array expression closes when the depth returns to zero.
     */
    arrays?: number | undefined

    /**
     * For comments, the token representing the active comment.
     *
     * The comment token is captured at the `comments` level after a new comment
     * has just been entered.\
     * The token is extracted from the first event produced by the current comment
     * construct.
     */
    comment?: Token | undefined

    /**
     * Whether markdown indentation was is active.
     *
     * This is used to protect indentation that should be parsed as markdown,
     * i.e. line prefixes inside indented code.
     */
    markdownIndent?: boolean | undefined

    /**
     * For object expressions, the current object nesting depth.
     *
     * The first object expression marker in the content establishes a nesting
     * depth of one. Nested left curly braces increase the depth, while right
     * curly braces decrease it.\
     * An object expression closes when the depth returns to zero.
     */
    objects?: number | undefined

    /**
     * For comments, the token representing the comment opener.
     *
     * By default, this is a `commentOpener` token.
     *
     * Comment openers are a specific sequence of {@linkcode Marker} (non-`null`
     * character codes), unique to the surrounding source language, used to
     * signal the beginning of a comment.
     *
     * Marker sequences for block comment openers are unique in comparison to
     * their comment closer and comment line sequences.
     *
     * For line comments, the beginning sequence *is* the comment opener.\
     * Further sequences are considered part of the current comment line prefix.
     * When indented syntax is disabled, markers on continued lines are expected
     * to match the sequence established by `opener`.
     *
     * @see {@linkcode Token}
     */
    opener?: Token | undefined

    /**
     * The width of the comment opener ({@linkcode ContainerState.opener}).
     *
     * Opener width is the difference between `end` and `start` columns.
     *
     * When a comment is active and indented syntax is enabled, opener width is
     * used to derive the expected indentation of a candidate continuation line.
     *
     * Before any whitespace can be treated as a marker sequence, a line
     * comment's candidate line must have leading comment padding that ends
     * directly below the active opener. For block comments, leading comment
     * padding must align with the middle marker of the active opener. After
     * accounting for opener alignment, at least one whitespace is required to
     * form the line's indent.
     */
    openerWidth?: number | undefined
  }

  interface ContentTypeMap {
    comment: 'comment'
    content: 'content'
    document: 'document'
    flow: 'flow'
    language: 'language'
    source: 'source'
    string: 'string'
    text: 'text'
  }

  interface ContextMap {
    mark: TokenizeContext
  }

  interface Extension {
    attentionMarkers?: AttentionMarkers | null | undefined
    contentInitial?: ConstructRecord | null | undefined
    comments?: ConstructRecord | null | undefined
    expression?: ConstructRecord | null | undefined
    flowInitial?: ConstructRecord | null | undefined
    insideSpan?: InsideSpan | null | undefined
    source?: null | undefined
  }

  type InsideSpan = {
    null?: Pick<Construct, 'resolveAll'>[] | null | undefined
  }

  interface ParseContext {
    activeComment?: boolean | null | undefined
    atBlankLine?: boolean | null | undefined
    defined: string[]
    freshComment?: boolean | null | undefined
    freshRegion?: boolean | null | undefined
    lazy: Record<Line, boolean>
    previousBlankLine?: boolean | null | undefined
    skipComment?: boolean | undefined
    skipSummary?: boolean | undefined
  }

  interface Token {
    /**
     * The value of the token.
     */
    value?: string | null | undefined
  }

  interface TokenFields {
    _container?: boolean | undefined
    _close?: boolean | undefined
    _open?: boolean | undefined
    _region?: boolean | undefined
    _trailing?: boolean | undefined
  }

  interface TokenTypeMap extends micromark.TokenTypeMap {
    arrayExpression: 'arrayExpression'
    arrayMarker: 'arrayMarker'
    booleanExpression: 'booleanExpression'
    chunkComment: 'chunkComment'
    chunkExpression: 'chunkExpression'
    chunkLanguage: 'chunkLanguage'
    chunkMarkdown: 'chunkMarkdown'
    chunkString: 'chunkString'
    comment: 'comment'
    commentCloser: 'commentCloser'
    commentLinePrefix: 'commentLinePrefix'
    commentMarker: 'commentMarker'
    commentOpener: 'commentOpener'
    commentPadding: 'commentPadding'
    eoc: 'eoc'
    escapeMarker: 'escapeMarker'
    fieldSeparator: 'fieldSeparator'
    nullExpression: 'nullExpression'
    numberExpression: 'numberExpression'
    objectExpression: 'objectExpression'
    objectMarker: 'objectMarker'
    stringExpression: 'stringExpression'
    stringMarker: 'stringMarker'
    unexpectedValue: 'unexpectedValue'
    valueSeparator: 'valueSeparator'
  }

  interface TokenizeContext {
    concrete?: boolean | undefined
    readonly place: Place
  }
}
