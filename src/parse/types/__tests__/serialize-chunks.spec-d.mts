/**
 * @file Type Tests - SerializeChunks
 * @module fsm/parse/types/tests/unit-d/SerializeChunks
 */

import type {
  Chunk,
  Code,
  SerializeOptions
} from '@flex-development/fsm/parse'
import type TestSubject from '../serialize-chunks.mts'

describe('unit-d:types/SerializeChunks', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Chunk | NonNullable<Code>[])[], (SerializeOptions | boolean | null | undefined)?]', () => {
      // Arrange
      type Expect = [
        (Chunk | NonNullable<Code>[])[],
        (SerializeOptions | boolean | null | undefined)?
      ]

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
