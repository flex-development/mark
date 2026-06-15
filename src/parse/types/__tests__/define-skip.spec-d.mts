/**
 * @file Type Tests - DefineSkip
 * @module fsm/parse/types/tests/unit-d/DefineSkip
 */

import type { Point } from '@flex-development/fsm/parse'
import type TestSubject from '../define-skip.mts'

describe('unit-d:types/DefineSkip', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Pick<Point, "column" | "line">]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Pick<Point, 'column' | 'line'>]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
