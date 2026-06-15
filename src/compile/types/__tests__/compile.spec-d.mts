/**
 * @file Type Tests - Compile
 * @module fsm/compile/types/tests/unit-d/Compile
 */

import type { CompileResult } from '@flex-development/fsm/compile'
import type { Event } from '@flex-development/fsm/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../compile.mts'

describe('unit-d:types/Compile', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Event[] | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Nilable<Event[]>?]>()
    })
  })

  describe('returns', () => {
    it('should return CompileResult', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<CompileResult>()
    })
  })
})
