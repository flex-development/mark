/**
 * @file Type Tests - SerializeValue
 * @module fsm/compile/types/tests/unit-d/SerializeValue
 */

import type { CompileValue } from '@flex-development/fsm/compile'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../serialize-value.mts'

describe('unit-d:types/SerializeValue', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [CompileValue | undefined]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[CompileValue | undefined]>()
    })
  })

  describe('returns', () => {
    it('should return string | null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Nilable<string>>()
    })
  })
})
