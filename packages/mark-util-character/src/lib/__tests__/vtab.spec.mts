/**
 * @file Unit Tests - vtab
 * @module mark-util-character/lib/tests/unit/vtab
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../vtab.mts'

describe('unit:lib/vtab', () => {
  it('should return `false` if `code` is not `codes.vt`', () => {
    expect(testSubject(codes.ht)).to.be.false
  })

  it('should return `true` if `code` is `codes.vt`', () => {
    expect(testSubject(codes.vt)).to.be.true
  })
})
