/**
 * @file Type Tests - SerializeChunks
 * @module mark/parse/types/tests/unit-d/SerializeChunks
 */

import type { Chunk, SerializeOptions } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialize-chunks.mts'

describe('unit-d:types/SerializeChunks', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Chunk[], (SerializeOptions | boolean | null | undefined)?]', () => {
      // Arrange
      type Expect = [Chunk[], (SerializeOptions | boolean | null | undefined)?]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return string', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<string>()
    })
  })
})
