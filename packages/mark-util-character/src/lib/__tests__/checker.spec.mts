/**
 * @file Unit Tests - checker
 * @module mark-util-character/lib/tests/unit/checker
 */

import LARGEST_CODE_POINT from '#internal/largest-code-point'
import type { Serialize } from '@flex-development/mark-util-character'
import { chars, codes } from '@flex-development/mark-util-symbol'
import type { Code, CodeCheck } from '@flex-development/mark/parse'
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest'
import testSubject from '../checker.mts'

describe('unit:lib/checker', () => {
  let test: RegExp

  beforeEach(() => {
    test = /./
  })

  it('should return bound code check', () => {
    // Act
    const result = testSubject(test.source)

    // Expect
    expect(result).to.be.a('function').with.property('name', 'bound check')
  })

  describe('check', () => {
    let subject: CodeCheck

    beforeEach(() => {
      subject = testSubject(test)
    })

    it('should check valid code point against `test`', () => {
      // Arrange
      const code: NonNullable<Code> = codes.digit3
      let fromCodePoint: Mock<typeof String['fromCodePoint']>
      let tester: Mock<RegExp['test']>

      // Setup
      fromCodePoint = vi.spyOn(String, 'fromCodePoint')
      tester = vi.spyOn(test, 'test')

      // Act
      subject(code)

      // Expect
      expect(fromCodePoint).toHaveBeenCalledOnce()
      expect(fromCodePoint).toHaveBeenCalledWith(code)
      expect(tester).toHaveBeenCalledOnce()
      expect(tester).toHaveBeenCalledWith(fromCodePoint.mock.results[0]!.value)
    })

    it.each<[code: unknown]>([
      [LARGEST_CODE_POINT + 1],
      [Number.NaN],
      [codes.break],
      [codes.virtualSpace]
    ])('should return `false` if `code` is invalid code point (%#)', code => {
      expect(subject(code as Code)).to.be.false
    })

    it('should return `false` if typeof `code` is not a number', () => {
      expect(subject(codes.eos)).to.be.false
    })

    describe('serialize', () => {
      let serialize: Mock<Serialize>
      let subject: CodeCheck

      beforeEach(() => {
        serialize = vi.fn(() => chars.empty).mockName('serialize')
        subject = testSubject(test, serialize)
      })

      it('should serialize code and check result against `test`', () => {
        // Arrange
        const code: Code = codes.eos
        let tester: Mock<RegExp['test']>

        // Setup
        tester = vi.spyOn(test, 'test')

        // Act
        subject(code)

        // Expect
        expect(serialize).toHaveBeenCalledOnce()
        expect(serialize).toHaveBeenCalledWith(code)
        expect(tester).toHaveBeenCalledOnce()
        expect(tester).toHaveBeenCalledWith(serialize.mock.results[0]!.value)
      })
    })
  })
})
