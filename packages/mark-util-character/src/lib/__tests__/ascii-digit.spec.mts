/**
 * @file Unit Tests - asciiDigit
 * @module mark-util-character/lib/tests/unit/asciiDigit
 */

import digits from '#fixtures/digits'
import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../ascii-digit.mts'

describe('unit:lib/asciiDigit', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.space],
    [codes.uppercaseA],
    [codes.lowercaseA],
    [codes.byteOrderMarker],
    [codes.replacementCharacter]
  ])('should return `false` without ascii digit (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each(digits)('should return `true` given ascii digit (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
