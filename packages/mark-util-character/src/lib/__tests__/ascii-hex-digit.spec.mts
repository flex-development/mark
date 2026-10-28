/**
 * @file Unit Tests - asciiHexDigit
 * @module mark-util-character/lib/tests/unit/asciiHexDigit
 */

import digits from '#fixtures/digits'
import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../ascii-hex-digit.mts'

describe('unit:lib/asciiHexDigit', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.space],
    [codes.uppercaseH],
    [codes.lowercaseH],
    [codes.byteOrderMarker],
    [codes.replacementCharacter]
  ])('should return `false` without ascii hex digit (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each(digits)('should return `true` given ascii digit (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.uppercaseA],
    [codes.uppercaseB],
    [codes.uppercaseC],
    [codes.uppercaseD],
    [codes.uppercaseE],
    [codes.uppercaseF]
  ])('should return `true` given ascii alpha [A,F] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.lowercaseA],
    [codes.lowercaseB],
    [codes.lowercaseC],
    [codes.lowercaseD],
    [codes.lowercaseE],
    [codes.lowercaseF]
  ])('should return `true` given ascii alpha [a,f] (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
