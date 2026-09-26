/**
 * @file Type Tests - Enter
 * @module mark/ast/types/tests/unit-d/Enter
 */

import type {
  CompileContext,
  Node,
  OnEnterError
} from '@flex-development/mark/ast'
import type { Token } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../enter.mts'

describe('unit-d:types/Enter', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Node, Token, (OnEnterError | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Node, Token, (OnEnterError | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
