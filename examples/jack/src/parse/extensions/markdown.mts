/**
 * @file Extensions - markdown
 * @module examples/jack/extensions/markdown
 */

import { string } from '#initialize/text'
import { constants } from '@flex-development/jack/symbol'
import { codes } from '@flex-development/mark-util-symbol'
import type { NormalizedExtension } from '@flex-development/mark/parse'
import {
  attention,
  autolink,
  blockQuote,
  characterReference,
  codeFenced,
  codeIndented,
  codeText,
  definition,
  hardBreakEscape,
  headingAtx,
  htmlFlow,
  htmlText,
  labelEnd,
  labelStartImage,
  labelStartLink,
  lineEnding,
  list,
  setextUnderline,
  thematicBreak
} from 'micromark-core-commonmark'

/**
 * The markdown extension.
 *
 * @const {NormalizedExtension} markdown
 */
const markdown: NormalizedExtension = {
  [constants.contentTypeDocument]: {
    [codes.asterisk]: list,
    [codes.plusSign]: list,
    [codes.dash]: list,
    [codes.digit0]: list,
    [codes.digit1]: list,
    [codes.digit2]: list,
    [codes.digit3]: list,
    [codes.digit4]: list,
    [codes.digit5]: list,
    [codes.digit6]: list,
    [codes.digit7]: list,
    [codes.digit8]: list,
    [codes.digit9]: list,
    [codes.greaterThan]: blockQuote
  },
  [constants.contentTypeFlow]: {
    [codes.numberSign]: headingAtx,
    [codes.asterisk]: thematicBreak,
    [codes.dash]: [setextUnderline, thematicBreak],
    [codes.lessThan]: htmlFlow,
    [codes.equalsTo]: setextUnderline,
    [codes.underscore]: thematicBreak,
    [codes.graveAccent]: codeFenced,
    [codes.tilde]: codeFenced
  },
  [constants.contentTypeString]: {
    [codes.ampersand]: characterReference
  },
  [constants.contentTypeText]: {
    [codes.carriageReturnLineFeed]: lineEnding,
    [codes.lineFeed]: lineEnding,
    [codes.carriageReturn]: lineEnding,
    [codes.exclamationMark]: labelStartImage,
    [codes.ampersand]: characterReference,
    [codes.asterisk]: attention,
    [codes.lessThan]: [autolink, htmlText],
    [codes.leftSquareBracket]: labelStartLink,
    [codes.backslash]: [hardBreakEscape],
    [codes.rightSquareBracket]: labelEnd,
    [codes.underscore]: attention,
    [codes.graveAccent]: codeText
  },
  attentionMarkers: {
    null: [codes.asterisk, codes.underscore]
  },
  contentInitial: {
    [codes.leftSquareBracket]: definition
  },
  flowInitial: {
    [codes.horizontalTab]: codeIndented,
    [codes.virtualSpace]: codeIndented,
    [codes.space]: codeIndented
  },
  insideSpan: {
    null: [attention, { resolveAll: string.resolveAll }]
  }
} as unknown as NormalizedExtension

export default markdown
