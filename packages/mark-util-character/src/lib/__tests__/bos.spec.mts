/**
 * @file Unit Tests - bos
 * @module mark-util-character/lib/tests/unit/bos
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../bos.mts'

describe('unit:lib/bos', () => {
  it('should return `false` if `code` is not `codes.bos`', () => {
    expect(testSubject(codes.eos)).to.be.false
  })

  it('should return `true` if `code` is `codes.bos`', () => {
    expect(testSubject(codes.bos)).to.be.true
  })
})
