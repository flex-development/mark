/**
 * @file nt
 * @module examples/jack/symbol/nt
 */

import type { JackNode } from '@flex-development/jack/ast'
import type { Type } from '@flex-development/unist-util-types'

/**
 * The node type dictionary.
 *
 * @enum {Type<JackNode>}
 */
const nt = {
  arrayExpression: 'arrayExpression',
  arrayMarker: 'arrayMarker',
  booleanExpression: 'booleanExpression',
  break: 'break',
  characterEscape: 'characterEscape',
  characterEscapeValue: 'characterEscapeValue',
  comment: 'comment',
  commentCloser: 'commentCloser',
  commentLinePrefix: 'commentLinePrefix',
  commentMarker: 'commentMarker',
  commentOpener: 'commentOpener',
  commentPadding: 'commentPadding',
  escapeMarker: 'escapeMarker',
  fieldSeparator: 'fieldSeparator',
  hexEscape: 'hexEscape',
  hexEscapeValue: 'hexEscapeValue',
  identifier: 'identifier',
  linePrefix: 'linePrefix',
  nulEscape: 'nulEscape',
  nulEscapeValue: 'nulEscapeValue',
  nullExpression: 'nullExpression',
  numberExpression: 'numberExpression',
  objectExpression: 'objectExpression',
  objectMarker: 'objectMarker',
  objectMember: 'objectMember',
  operand: 'operand',
  root: 'root',
  signOperator: 'signOperator',
  stringExpression: 'stringExpression',
  stringMarker: 'stringMarker',
  unexpectedValue: 'unexpectedValue',
  unicodeEscape: 'unicodeEscape',
  unicodeEscapeValue: 'unicodeEscapeValue',
  unsignedNumber: 'unsignedNumber',
  valueSeparator: 'valueSeparator',
  whitespace: 'whitespace'
} as const

export default nt
