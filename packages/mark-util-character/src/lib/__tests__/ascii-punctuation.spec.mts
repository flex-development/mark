/**
 * @file Unit Tests - asciiPunctuation
 * @module mark-util-character/lib/tests/unit/asciiPunctuation
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../ascii-punctuation.mts'

describe('unit:lib/asciiPunctuation', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.space],
    [codes.digit0],
    [codes.lowercaseA],
    [codes.byteOrderMarker],
    [codes.replacementCharacter]
  ])('should return `false` without ascii punctuation (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.exclamationMark],
    [codes.quotationMark],
    [codes.numberSign],
    [codes.dollarSign],
    [codes.percentSign],
    [codes.ampersand],
    [codes.apostrophe],
    [codes.leftParenthesis],
    [codes.rightParenthesis],
    [codes.asterisk],
    [codes.plusSign],
    [codes.comma],
    [codes.dash],
    [codes.dot],
    [codes.slash]
  ])('should return `true` given code in range [U+0021,U+002F] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.colon],
    [codes.semicolon],
    [codes.leftAngleBracket],
    [codes.equalsTo],
    [codes.rightAngleBracket],
    [codes.questionMark],
    [codes.atSign]
  ])('should return `true` given code in range [U+003A,U+0040] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.leftSquareBracket],
    [codes.backslash],
    [codes.rightSquareBracket],
    [codes.caret],
    [codes.underscore],
    [codes.graveAccent]
  ])('should return `true` given code in range [U+005B,U+0060] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.leftCurlyBrace],
    [codes.verticalBar],
    [codes.rightCurlyBrace],
    [codes.tilde]
  ])('should return `true` given code in range [U+007B,U+007E] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
