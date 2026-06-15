/**
 * @file Type Tests - SliceSerialize
 * @module fsm/parse/types/tests/unit-d/SliceSerialize
 */

import type { Range, SerializeOptions } from '@flex-development/fsm/parse'
import type TestSubject from '../slice-serialize.mts'

describe('unit-d:types/SliceSerialize', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Range, (SerializeOptions | boolean | null | undefined)?]', () => {
      // Arrange
      type Params = [Range, (SerializeOptions | boolean | null | undefined)?]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Params>()
    })
  })

  describe('returns', () => {
    it('should return string', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<string>()
    })
  })
})
