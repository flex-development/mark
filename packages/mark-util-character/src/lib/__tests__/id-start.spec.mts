/**
 * @file Unit Tests - idStart
 * @module mark-util-character/lib/tests/unit/idStart
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../id-start.mts'

describe('unit:lib/idStart', () => {
  it('should return `false` if `code` cannot start identifier', () => {
    expect(testSubject(codes.numberSign)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.dollarSign],
    [codes.uppercaseL],
    [codes.lowercaseC]
  ])('should return `true` if `code` can start identifier', code => {
    expect(testSubject(code)).to.be.true
  })
})
