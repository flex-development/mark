/**
 * @file Unit Tests - lineEnding
 * @module mark-util-character/lib/tests/unit/lineEnding
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../line-ending.mts'

describe('unit:lib/lineEnding', () => {
  it('should return `false` if `code` is not line ending code', () => {
    expect(testSubject(codes.space)).to.be.false
  })

  it.each<[keyof typeof codes]>([
    ['cr'],
    ['crlf'],
    ['lf'],
    ['ls'],
    ['ps'],
    ['vcr'],
    ['vlf']
  ])('should return `true` if `code` is line ending code (`codes.%s`)', key => {
    expect(testSubject(codes[key])).to.be.true
  })
})
