/**
 * @file Unit Tests - space
 * @module mark-util-character/lib/tests/unit/space
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../whitespace.mts'

describe('unit:lib/space', () => {
  it('should return `false` if `code` is not whitespace code', () => {
    expect(testSubject(codes.lf)).to.be.false
  })

  it.each<[keyof typeof codes]>([
    ['horizontalTab'],
    ['ht'],
    ['space'],
    ['vht'],
    ['virtualSpace'],
    ['vs']
  ])('should return `true` if `code` is whitespace code (`codes.%s`)', key => {
    expect(testSubject(codes[key])).to.be.true
  })
})
