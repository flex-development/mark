/**
 * @file Type Tests - Transform
 * @module mark/ast/types/tests/unit-d/Transform
 */

import type { Tree } from '@flex-development/mark/ast'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../transform.mts'

describe('unit-d:types/Transform', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Tree]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Tree]>()
    })
  })

  describe('returns', () => {
    it('should return Tree | null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Nilable<Tree>>()
    })
  })
})
