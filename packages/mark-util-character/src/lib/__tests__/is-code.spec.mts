/**
 * @file Unit Tests - isCode
 * @module mark-util-character/lib/tests/unit/isCode
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../is-code.mts'

describe('unit:lib/isCode', () => {
  it('should return `false` if `value` is not `null` or a number', () => {
    expect(testSubject(import.meta.url)).to.be.false
  })

  it('should return `true` if `value` is end-of-stream code', () => {
    expect(testSubject(codes.eos)).to.be.true
  })

  it.each<Parameters<typeof testSubject>>([
    [Number.NaN],
    [codes.break],
    [codes.cr]
  ])('should return `true` if `value` is a number (%#)', value => {
    expect(testSubject(value)).to.be.true
  })
})
