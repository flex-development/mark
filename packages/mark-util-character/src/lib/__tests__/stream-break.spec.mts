/**
 * @file Unit Tests - streamBreak
 * @module mark-util-character/lib/tests/unit/streamBreak
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../stream-break.mts'

describe('unit:lib/streamBreak', () => {
  it('should return `false` if `code` is not `codes.break`', () => {
    expect(testSubject(codes.eos)).to.be.false
  })

  it('should return `true` if `code` is `codes.break`', () => {
    expect(testSubject(codes.break)).to.be.true
  })
})
