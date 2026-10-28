/**
 * @file Unit Tests - unicodePunctuation
 * @module mark-util-character/lib/tests/unit/unicodePunctuation
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../unicode-punctuation.mts'

describe('unit:lib/unicodePunctuation', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.ht],
    [codes.digit1],
    [codes.lowercaseB],
    [codes.byteOrderMarker]
  ])('should return `false` without unicode punctuation (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it('should return `true` given `codes.replacementCharacter`', () => {
    expect(testSubject(codes.replacementCharacter)).to.be.true
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
    [codes.slash],
    [codes.colon],
    [codes.semicolon],
    [codes.leftAngleBracket],
    [codes.equalsTo],
    [codes.rightAngleBracket],
    [codes.questionMark],
    [codes.atSign],
    [codes.leftSquareBracket],
    [codes.backslash],
    [codes.rightSquareBracket],
    [codes.caret],
    [codes.underscore],
    [codes.graveAccent],
    [codes.leftCurlyBrace],
    [codes.verticalBar],
    [codes.rightCurlyBrace],
    [codes.tilde]
  ])('should return `true` given ascii punctuation (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x203f], // UNDERTIE
    [0x2040], // CHARACTER TIE
    [0x2054] // INVERTED UNDERTIE
  ])('should return `true` given code in `Pc` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x2014], // EM DASH
    [0x2e17], // DOUBLE OBLIQUE HYPHEN
    [0x2e1a] // HYPHEN WITH DIAERESIS
  ])('should return `true` given code in `Pd` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x0f3b], // TIBETAN MARK GUG RTAGS GYAS
    [0x301e], // DOUBLE PRIME QUOTATION MARK
    [0x301f] // LOW DOUBLE PRIME QUOTATION MARK
  ])('should return `true` given code in `Pe` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x0f3b], // TIBETAN MARK GUG RTAGS GYAS
    [0x301e], // DOUBLE PRIME QUOTATION MARK
    [0x301f] // LOW DOUBLE PRIME QUOTATION MARK
  ])('should return `true` given code in `Pf` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x00bb], // RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
    [0x2019], // RIGHT SINGLE QUOTATION MARK
    [0x201d] // RIGHT DOUBLE QUOTATION MARK
  ])('should return `true` given code in `Pi` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x00a7], // SECTION SIGN
    [0x00b6], // PILCROW SIGN
    [0x00b7] // MIDDLE DOT
  ])('should return `true` given code in `Po` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x27c5], // LEFT S-SHAPED BAG DELIMITER
    [0x2e26], // LEFT SIDEWAYS U BRACKET
    [0x300c] // LEFT CORNER BRACKET
  ])('should return `true` given code in `Ps` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
