/**
 * @file Unit Tests - space
 * @module mark-util-character/lib/tests/unit/space
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../space.mts'

describe('unit:lib/space', () => {
  it('should return `false` if `code` is not space code', () => {
    expect(testSubject(codes.horizontalTab)).to.be.false
  })

  it.each<[keyof typeof codes]>([
    ['space'],
    ['virtualSpace'],
    ['vs']
  ])('should return `true` if `code` is space code (`codes.%s`)', key => {
    expect(testSubject(codes[key])).to.be.true
  })
})
