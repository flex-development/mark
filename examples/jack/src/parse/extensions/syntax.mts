/**
 * @file Extensions - markdown
 * @module examples/jack/extensions/markdown
 */

import blockComment from '#constructs/comments/block.comment'
import lineComment from '#constructs/comments/line.comment'
import arrayExpression from '#constructs/container/array.expression'
import objectExpression from '#constructs/container/object.expression'
import booleanExpression from '#constructs/scalar/boolean.expression'
import nullExpression from '#constructs/scalar/null.expression'
import numberExpression from '#constructs/scalar/number.expression'
import stringExpression from '#constructs/scalar/string.expression'
import characterEscape from '#constructs/string/character-escape'
import hexEscape from '#constructs/string/hex-escape'
import nulEscape from '#constructs/string/nul-escape'
import unicodeEscape from '#constructs/string/unicode-escape'
import wc from '#constructs/wc'
import { constants } from '@flex-development/jack/symbol'
import { codes } from '@flex-development/mark-util-symbol'
import type { NormalizedExtension } from '@flex-development/mark/parse'

/**
 * The syntax extension.
 *
 * @const {NormalizedExtension} syntax
 */
const syntax: NormalizedExtension = {
  [constants.contentTypeComments]: {
    [codes.slash]: [blockComment, lineComment]
  },
  [constants.contentTypeExpression]: {
    [codes.quotationMark]: stringExpression, // string
    [codes.apostrophe]: stringExpression, // string
    [codes.plusSign]: numberExpression, // number (explicit positive)
    [codes.dash]: numberExpression, // number (negative)
    [codes.dot]: numberExpression, // number (float, leading decimal point)
    [codes.digit0]: numberExpression, // number
    [codes.digit1]: numberExpression, // number
    [codes.digit2]: numberExpression, // number
    [codes.digit3]: numberExpression, // number
    [codes.digit4]: numberExpression, // number
    [codes.digit5]: numberExpression, // number
    [codes.digit6]: numberExpression, // number
    [codes.digit7]: numberExpression, // number
    [codes.digit8]: numberExpression, // number
    [codes.digit9]: numberExpression, // number
    [codes.uppercaseI]: numberExpression, // number (Infinity)
    [codes.uppercaseN]: numberExpression, // number (NaN)
    [codes.leftSquareBracket]: arrayExpression, // array
    [codes.lowercaseF]: booleanExpression, // false
    [codes.lowercaseN]: nullExpression, // null
    [codes.lowercaseT]: booleanExpression, // true
    [codes.leftCurlyBrace]: objectExpression // object
  },
  [constants.contentTypeString]: {
    [codes.horizontalTab]: wc,
    [codes.carriageReturnLineFeed]: wc,
    [codes.lineFeed]: wc,
    [codes.carriageReturn]: wc,
    [codes.ht]: wc,
    [codes.vt]: wc,
    [codes.lf]: wc,
    [codes.ff]: wc,
    [codes.cr]: wc,
    [codes.space]: wc,
    [codes.backslash]: [nulEscape, hexEscape, unicodeEscape, characterEscape],
    [codes.nbsp]: wc,
    [codes.ls]: wc,
    [codes.ps]: wc,
    null: [wc] // covers remainder of unicode `Zs` category.
  }
}

export default syntax
