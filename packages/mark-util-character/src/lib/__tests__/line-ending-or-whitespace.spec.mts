/**
 * @file Unit Tests - lineEndingOrWhitespace
 * @module mark-util-character/lib/tests/unit/lineEndingOrWhitespace
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../line-ending-or-whitespace.mts'

describe('unit:lib/lineEndingOrWhitespace', () => {
  it('should return `false` if `code` is not eol or ws code', () => {
    expect(testSubject(codes.eos)).to.be.false
  })

  it.each<[keyof typeof codes]>([
    ['cr'],
    ['crlf'],
    ['horizontalTab'],
    ['ht'],
    ['lf'],
    ['ls'],
    ['ps'],
    ['space'],
    ['vcr'],
    ['vht'],
    ['virtualSpace'],
    ['vlf'],
    ['vs']
  ])('should return `true` if `code` is eol or ws code (`codes.%s`)', k => {
    expect(testSubject(codes[k])).to.be.true
  })
})
