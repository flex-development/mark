/**
 * @file Unit Tests - list
 * @module mark-util-combine-extensions/internal/tests/unit/list
 */

import { chars } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../list.mts'

describe('unit:internal/list', () => {
  it('should return `value` as array if `value` is a `Set`', () => {
    // Arrange
    const value: Set<any> = new Set([chars.digit0, chars.digit1, chars.digit2])

    // Act
    const result = testSubject(value)

    // Expect
    expect(result).to.not.eq(value)
    expect(result).to.eql([...value])
  })

  it('should return `value` if `value` is an array', () => {
    // Arrange
    const value: unknown = [
      chars.digit0,
      chars.digit3,
      chars.digit1,
      chars.digit3
    ]

    // Act + Expect
    expect(testSubject(value)).to.eq(value)
  })

  it('should return new list if `value` is not an array', () => {
    // Arrange
    const value: unknown = 13

    // Act + Expect
    expect(testSubject(value)).to.be.an('array').and.eql([value])
  })
})
