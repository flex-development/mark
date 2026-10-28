/**
 * @file Unit Tests - asciiAtext
 * @module mark-util-character/lib/tests/unit/asciiAtext
 */

import digits from '#fixtures/digits'
import lower from '#fixtures/lower'
import upper from '#fixtures/upper'
import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../ascii-atext.mts'

describe('unit:lib/asciiAtext', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.lf],
    [codes.zwnj],
    [codes.byteOrderMarker],
    [codes.replacementCharacter]
  ])('should return `false` without ascii atext (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it('should return `true` given `codes.asterisk`', () => {
    expect(testSubject(codes.asterisk)).to.be.true
  })

  it('should return `true` given `codes.dash`', () => {
    expect(testSubject(codes.dash)).to.be.true
  })

  it('should return `true` given `codes.equalsTo`', () => {
    expect(testSubject(codes.equalsTo)).to.be.true
  })

  it('should return `true` given `codes.exclamationMark`', () => {
    expect(testSubject(codes.exclamationMark)).to.be.true
  })

  it('should return `true` given `codes.plusSign`', () => {
    expect(testSubject(codes.plusSign)).to.be.true
  })

  it('should return `true` given `codes.questionMark`', () => {
    expect(testSubject(codes.questionMark)).to.be.true
  })

  it('should return `true` given `codes.slash`', () => {
    expect(testSubject(codes.slash)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    ...digits,
    ...upper,
    ...lower
  ])('should return `true` given ascii alphanumeric (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.numberSign],
    [codes.dollarSign],
    [codes.percentSign],
    [codes.ampersand],
    [codes.apostrophe]
  ])('should return `true` given code in range [U+0023,U+0027] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.caret],
    [codes.underscore],
    [codes.graveAccent]
  ])('should return `true` given code in range [U+005E,U+0060] (%j)', code => {
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
