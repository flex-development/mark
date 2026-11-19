/**
 * @file Type Tests - primitiveExpression
 * @module examples/jack/ast/content/tests/unit-d/primitiveExpression
 */

import type NodeObject from '#tests/types/node-object'
import type {
  BooleanExpression,
  NullExpression,
  NumberExpression,
  StringExpression
} from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../primitive-expression.mts'

describe('unit-d:ast/content/primitiveExpression', () => {
  describe('PrimitiveExpression', () => {
    it('should equal PrimitiveExpressionMap[keyof PrimitiveExpressionMap]', () => {
      // Arrange
      type K = keyof TestSubject.PrimitiveExpressionMap
      type Expect = TestSubject.PrimitiveExpressionMap[K]

      // Expect
      expectTypeOf<TestSubject.PrimitiveExpression>().toEqualTypeOf<Expect>()
    })
  })

  describe('PrimitiveExpressionMap', () => {
    it('should match NodeObject<BooleanExpression>', () => {
      expectTypeOf<TestSubject.PrimitiveExpressionMap>()
        .toExtend<NodeObject<BooleanExpression>>()
    })

    it('should match NodeObject<NullExpression>', () => {
      expectTypeOf<TestSubject.PrimitiveExpressionMap>()
        .toExtend<NodeObject<NullExpression>>()
    })

    it('should match NodeObject<NumberExpression>', () => {
      expectTypeOf<TestSubject.PrimitiveExpressionMap>()
        .toExtend<NodeObject<NumberExpression>>()
    })

    it('should match NodeObject<StringExpression>', () => {
      expectTypeOf<TestSubject.PrimitiveExpressionMap>()
        .toExtend<NodeObject<StringExpression>>()
    })
  })
})
