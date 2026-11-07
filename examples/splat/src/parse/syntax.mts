/**
 * @file syntax
 * @module examples/splat/parse/syntax
 */

import { codes } from '@flex-development/mark-util-symbol'
import type { NormalizedExtension } from '@flex-development/mark/parse'
import { constants, tt } from '@flex-development/splat/symbol'
import asterisk from './constructs/asterisk.mts'
import bracketExpression from './constructs/bracket-expression.mts'
import characterClass from './constructs/character-class.mts'
import collatingSymbol from './constructs/collating-symbol.mts'
import controlCharacter from './constructs/control-character.mts'
import equivalenceClass from './constructs/equivalence-class.mts'
import escape from './constructs/escape.mts'
import lineEnding from './constructs/line-ending.mts'
import patternNegation from './constructs/pattern-negation.mts'
import questionMark from './constructs/question-mark.mts'
import rangeExpression from './constructs/range-expression.mts'
import segment from './constructs/segment.mts'
import whitespace from './constructs/whitespace.mts'

/**
 * The `splat` syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} syntax
 */
const syntax: NormalizedExtension = {
  [constants.contentTypePattern]: {
    [codes.exclamationMark]: patternNegation,
    [codes.asterisk]: asterisk,
    [codes.slash]: segment,
    [codes.questionMark]: questionMark,
    [codes.leftSquareBracket]: bracketExpression,
    [codes.backslash]: escape
  },
  [constants.contentTypeLiteral]: {
    null: [lineEnding, whitespace, controlCharacter]
  },
  [tt.bracketExpression]: {
    [codes.leftSquareBracket]: [
      characterClass,
      collatingSymbol,
      equivalenceClass
    ],
    [codes.backslash]: escape,
    null: [rangeExpression]
  },
  [tt.segment]: {
    [codes.asterisk]: asterisk,
    [codes.questionMark]: questionMark,
    [codes.leftSquareBracket]: bracketExpression,
    [codes.backslash]: escape
  }
}

export default syntax
