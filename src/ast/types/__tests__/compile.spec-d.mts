/**
 * @file Type Tests - Compile
 * @module mark/ast/types/tests/unit-d/Compile
 */

import type { Tree } from '@flex-development/mark/ast'
import type { Event } from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
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
    it('should return Tree', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Tree>()
    })
  })
})
