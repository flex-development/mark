/**
 * @file Type Tests - Postprocess
 * @module mark/compile/types/tests/unit-d/Postprocess
 */

import type { CompileResult, Context } from '@flex-development/mark/compile'
import type { Event } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../postprocess.mts'

describe('unit-d:types/Postprocess', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [CompileResult, Event[]]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[CompileResult, Event[]]>()
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
