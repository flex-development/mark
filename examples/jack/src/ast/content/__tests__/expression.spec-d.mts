/**
 * @file Type Tests - expression
 * @module examples/jack/ast/content/tests/unit-d/expression
 */

import type NodeObject from '#tests/types/node-object'
import type {
  ArrayExpression,
  ObjectExpression,
  PrimitiveExpressionMap
} from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../expression.mts'

describe('unit-d:ast/content/expression', () => {
  describe('Expression', () => {
    it('should equal ExpressionMap[keyof ExpressionMap]', () => {
      // Arrange
      type K = keyof TestSubject.ExpressionMap
      type Expect = TestSubject.ExpressionMap[K]

      // Expect
      expectTypeOf<TestSubject.Expression>().toEqualTypeOf<Expect>()
    })
  })

  describe('ExpressionMap', () => {
    it('should extend PrimitiveExpressionMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<PrimitiveExpressionMap>()
    })

    it('should match NodeObject<ArrayExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<ArrayExpression>>()
    })

    it('should match NodeObject<ObjectExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<ObjectExpression>>()
    })
  })
})
