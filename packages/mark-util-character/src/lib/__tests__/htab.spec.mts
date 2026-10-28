/**
 * @file Unit Tests - htab
 * @module mark-util-character/lib/tests/unit/htab
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../htab.mts'

describe('unit:lib/htab', () => {
  it('should return `false` if `code` is not horizontal tab code', () => {
    expect(testSubject(codes.vt)).to.be.false
  })

  it('should return `true` if `code` is `codes.horizontalTab`', () => {
    expect(testSubject(codes.horizontalTab)).to.be.true
  })

  it('should return `true` if `code` is `codes.ht`', () => {
    expect(testSubject(codes.ht)).to.be.true
  })

  it('should return `true` if `code` is `codes.vht`', () => {
    expect(testSubject(codes.vht)).to.be.true
  })
})
