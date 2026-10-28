/**
 * @file Unit Tests - asciiAlphanumeric
 * @module mark-util-character/lib/tests/unit/asciiAlphanumeric
 */

import digits from '#fixtures/digits'
import lower from '#fixtures/lower'
import upper from '#fixtures/upper'
import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../ascii-alphanumeric.mts'

describe('unit:lib/asciiAlphanumeric', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.space],
    [codes.exclamationMark],
    [codes.byteOrderMarker],
    [codes.replacementCharacter]
  ])('should return `false` without ascii alphanumeric (%j)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each(digits)('should return `true` given ascii digit (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each(lower)('should return `true` given ascii lower alpha (%j)', code => {
    expect(testSubject(code)).to.be.true
  })

  it.each(upper)('should return `true` given ascii upper alpha (%j)', code => {
    expect(testSubject(code)).to.be.true
  })
})
