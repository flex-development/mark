/**
 * @file Unit Tests - bom
 * @module mark-util-character/lib/tests/unit/bom
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../bom.mts'

describe('unit:lib/bom', () => {
  it('should return `false` if `code` is not `codes.bom`', () => {
    expect(testSubject(codes.bos)).to.be.false
  })

  it('should return `true` if `code` is `codes.bom`', () => {
    expect(testSubject(codes.bom)).to.be.true
  })
})
