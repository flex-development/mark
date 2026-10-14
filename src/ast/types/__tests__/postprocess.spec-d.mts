/**
 * @file Type Tests - Postprocess
 * @module mark/ast/types/tests/unit-d/Postprocess
 */

import type { Context, Tree } from '@flex-development/mark/ast'
import type { Event } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../postprocess.mts'

describe('unit-d:types/Postprocess', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Tree, Event[]]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Tree, Event[]]>()
    })
  })

  describe('returns', () => {
    it('should return null | undefined | void', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<null | undefined | void>()
    })
  })
})
