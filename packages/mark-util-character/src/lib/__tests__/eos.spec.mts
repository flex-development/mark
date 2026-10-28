/**
 * @file Unit Tests - eos
 * @module mark-util-character/lib/tests/unit/eos
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../eos.mts'

describe('unit:lib/eos', () => {
  it('should return `false` if `code` is not `codes.eos`', () => {
    expect(testSubject(codes.bos)).to.be.false
  })

  it('should return `true` if `code` is `codes.eos`', () => {
    expect(testSubject(codes.eos)).to.be.true
  })
})
