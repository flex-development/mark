/**
 * @file Unit Tests - push
 * @module mark-util-chunked/tests/unit/push
 */

import { chars } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../push.mts'

describe('unit:push', () => {
  it('should return `items` if `list` is empty', () => {
    // Arrange
    const items: unknown[] = []
    const list: unknown[] = []

    // Act + Expect
    expect(testSubject(list, items)).to.eq(items).and.not.eq(list)
  })

  it('should return `list` with new items inserted at the end', () => {
    // Arrange
    const items: unknown[] = [chars.digit2]
    const list: unknown[] = [chars.digit0, chars.digit1]

    // Act
    const result = testSubject(list, items)

    // Expect
    expect(result).to.eq(list).and.not.eq(items)
    expect(result).to.have.property('length', +chars.digit3)
    expect(result).to.eql([chars.digit0, chars.digit1, chars.digit2])
  })
})
