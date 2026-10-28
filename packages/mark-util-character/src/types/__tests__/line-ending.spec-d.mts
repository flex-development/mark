/**
 * @file Type Tests - LineEnding
 * @module mark-util-character/types/tests/unit-d/LineEnding
 */

import type { codes } from '@flex-development/mark-util-symbol'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../line-ending.mts'

describe('unit-d:types/LineEnding', () => {
  it('should extract typeof codes.carriageReturn', () => {
    // Arrange
    type Extract = typeof codes.carriageReturn | typeof codes.vcr

    // Expect
    expectTypeOf<TestSubject>().extract<Extract>().not.toBeNever()
  })

  it('should extract typeof codes.carriageReturnLineFeed', () => {
    // Arrange
    type Extract = typeof codes.carriageReturnLineFeed | typeof codes.crlf

    // Expect
    expectTypeOf<TestSubject>().extract<Extract>().not.toBeNever()
  })

  it('should extract typeof codes.cr', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.cr>().not.toBeNever()
  })

  it('should extract typeof codes.lf', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.lf>().not.toBeNever()
  })

  it('should extract typeof codes.lineFeed', () => {
    // Arrange
    type Extract = typeof codes.lineFeed | typeof codes.vlf

    // Expect
    expectTypeOf<TestSubject>().extract<Extract>().not.toBeNever()
  })

  it('should extract typeof codes.ls', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.ls>().not.toBeNever()
  })

  it('should extract typeof codes.ps', () => {
    expectTypeOf<TestSubject>().extract<typeof codes.ps>().not.toBeNever()
  })
})
