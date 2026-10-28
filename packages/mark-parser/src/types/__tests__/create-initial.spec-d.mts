/**
 * @file Type Tests - CreateInitial
 * @module mark-parser/types/tests/unit-d/CreateInitial
 */

import type {
  InitialConstruct,
  InitialConstructs
} from '@flex-development/mark/parse'
import type { EmptyArray } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create-initial.mts'

describe('unit-d:types/CreateInitial', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<EmptyArray>()
    })
  })

  describe('returns', () => {
    it('should return InitialConstruct | Partial<InitialConstructs>', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<InitialConstruct | Partial<InitialConstructs>>()
    })
  })
})
