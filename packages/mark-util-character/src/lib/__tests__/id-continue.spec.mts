/**
 * @file Unit Tests - idContinue
 * @module mark-util-character/lib/tests/unit/idContinue
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../id-continue.mts'

describe('unit:lib/idContinue', () => {
  it('should return `false` if `code` cannot continue identifier', () => {
    expect(testSubject(codes.questionMark)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    [codes.dollarSign],
    [codes.uppercaseA],
    [codes.lowercaseO]
  ])('should return `true` if `code` can continue identifier', code => {
    expect(testSubject(code)).to.be.true
  })
})
