/**
 * @file tt
 * @module examples/splat/symbol/tt
 */

import type { TokenType } from '@flex-development/mark/parse'

/**
 * The token type dictionary.
 *
 * @enum {TokenType}
 */
const tt = {
  asterisk: 'asterisk', // Wildcard
  bracketExpression: 'bracketExpression', // BracketExpression
  bracketNegation: 'bracketNegation', // Negation
  characterClass: 'characterClass', // CharacterClass
  characterClassValue: 'characterClassValue', // CharacterClass#value
  chunkBrackets: 'chunkBrackets',
  chunkLiteral: 'chunkLiteral',
  collatingSymbol: 'collatingSymbol', // CollatingSymbol
  collatingSymbolValue: 'collatingSymbolValue', // CollatingSymbol#value
  controlCharacter: 'controlCharacter',
  data: 'data',
  eoc: 'eoc',
  equivalenceClass: 'equivalenceClass', // EquivalenceClass
  equivalenceClassValue: 'equivalenceClassValue', // EquivalenceClass#value
  escape: 'escape', // Escape
  escapeMarker: 'escapeMarker',
  escapeValue: 'escapeValue', // Escape#value
  lineEnding: 'lineEnding',
  literal: 'literal', // Text
  patternNegation: 'patternNegation', // Negation
  questionMark: 'questionMark', // Wildcard
  rangeEnd: 'rangeEnd', // RangeEnd
  rangeExpression: 'rangeExpression', // RangeExpression
  rangeStart: 'rangeStart', // RangeStart
  segment: 'segment',
  separator: 'separator', // Separator
  whitespace: 'whitespace'
} as const

export default tt
