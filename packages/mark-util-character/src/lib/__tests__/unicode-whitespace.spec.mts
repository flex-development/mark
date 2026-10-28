/**
 * @file Unit Tests - unicodeWhitespace
 * @module mark-util-character/lib/tests/unit/unicodeWhitespace
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../unicode-whitespace.mts'

describe('unit:lib/unicodeWhitespace', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.digit3],
    [codes.uppercaseL],
    [codes.replacementCharacter]
  ])('should return `false` without unicode whitespace (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it('should return `true` given `codes.byteOrderMarker`', () => {
    expect(testSubject(codes.byteOrderMarker)).to.be.true
  })

  it('should return `true` given `codes.cr`', () => {
    expect(testSubject(codes.cr)).to.be.true
  })

  it('should return `true` given `codes.ff`', () => {
    expect(testSubject(codes.ff)).to.be.true
  })

  it('should return `true` given `codes.ht`', () => {
    expect(testSubject(codes.ht)).to.be.true
  })

  it('should return `true` given `codes.lf`', () => {
    expect(testSubject(codes.lf)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [0x00a0], // NO-BREAK SPACE (NBSP)
    [0x1680], // OGHAM SPACE MARK
    [0x3000] // IDEOGRAPHIC SPACE
  ])('should return `true` given code in `Zs` category (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
