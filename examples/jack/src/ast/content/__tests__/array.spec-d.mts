/**
 * @file Type Tests - array
 * @module examples/jack/ast/content/tests/unit-d/array
 */

import type NodeObject from '#tests/types/node-object'
import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  LinePrefix,
  UnexpectedValue,
  ValueSeparator,
  Whitespace
} from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../array.mts'

describe('unit-d:ast/content/array', () => {
  describe('ArrayContent', () => {
    it('should equal ArrayContentMap[keyof ArrayContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.ArrayContentMap
      type Expect = TestSubject.ArrayContentMap[K]

      // Expect
      expectTypeOf<TestSubject.ArrayContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('ArrayContentMap', () => {
    it('should extend ExpressionMap', () => {
      expectTypeOf<TestSubject.ArrayContentMap>().toExtend<ExpressionMap>()
    })

    it('should match NodeObject<Break>', () => {
      expectTypeOf<TestSubject.ArrayContentMap>()
        .toExtend<NodeObject<Break>>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.ArrayContentMap>()
        .toExtend<NodeObject<Comment>>()
    })

    it('should match NodeObject<LinePrefix>', () => {
      expectTypeOf<TestSubject.ArrayContentMap>()
        .toExtend<NodeObject<LinePrefix>>()
    })

    it('should match NodeObject<Whitespace>', () => {
      expectTypeOf<TestSubject.ArrayContentMap>()
        .toExtend<NodeObject<Whitespace>>()
    })

    it('should match NodeObject<UnexpectedValue>', () => {
      expectTypeOf<TestSubject.ArrayContentMap>()
        .toExtend<NodeObject<UnexpectedValue>>()
    })

    it('should match NodeObject<ValueSeparator>', () => {
      expectTypeOf<TestSubject.ArrayContentMap>()
        .toExtend<NodeObject<ValueSeparator>>()
    })
  })
})
