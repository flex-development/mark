/**
 * @file Unit Tests - asciiControl
 * @module mark-util-character/lib/tests/unit/asciiControl
 */

import { codes } from '@flex-development/mark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../ascii-control.mts'

describe('unit:lib/asciiControl', () => {
  it.each<Parameters<typeof testSubject>>([
    [codes.eos],
    [codes.break],
    [codes.space]
  ])('should return `false` if `code` is not control code (%#)', code => {
    expect(testSubject(code)).to.be.false
  })

  it.each<[keyof typeof codes]>([
    ['ack'],
    ['bel'],
    ['bs'],
    ['can'],
    ['carriageReturn'],
    ['carriageReturnLineFeed'],
    ['cr'],
    ['crlf'],
    ['dc1'],
    ['dc2'],
    ['dc3'],
    ['dc4'],
    ['del'],
    ['dle'],
    ['em'],
    ['enq'],
    ['eot'],
    ['esc'],
    ['etb'],
    ['etx'],
    ['ff'],
    ['fs'],
    ['gs'],
    ['horizontalTab'],
    ['ht'],
    ['lf'],
    ['lineFeed'],
    ['nak'],
    ['nul'],
    ['rs'],
    ['si'],
    ['so'],
    ['soh'],
    ['stx'],
    ['sub'],
    ['syn'],
    ['us'],
    ['vcr'],
    ['vht'],
    ['virtualSpace'],
    ['vlf'],
    ['vs'],
    ['vt']
  ])('should return `true` if `code` is control code (`codes.%s`)', key => {
    expect(testSubject(codes[key])).to.be.true
  })
})
