/**
 * @file Type Tests - CreateValue
 * @module fsm/compile/types/tests/unit-d/CreateValue
 */

import type { CompileValue } from '@flex-development/fsm/compile'
import type { Token } from '@flex-development/fsm/parse'
import type TestSubject from '../create-value.mts'

describe('unit-d:types/CreateValue', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return V', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<CompileValue>()
    })
  })
})
