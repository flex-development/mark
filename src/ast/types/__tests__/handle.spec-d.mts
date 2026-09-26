/**
 * @file Type Tests - Handle
 * @module mark/ast/types/tests/unit-d/Handle
 */

import type { CompileContext } from '@flex-development/mark/ast'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../handle.mts'

describe('unit-d:types/Handle', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
