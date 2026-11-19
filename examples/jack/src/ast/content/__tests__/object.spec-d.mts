/**
 * @file Type Tests - object
 * @module examples/jack/ast/content/tests/unit-d/object
 */

import type NodeObject from '#tests/types/node-object'
import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  LinePrefix,
  ObjectMember,
  UnexpectedValue,
  ValueSeparator,
  Whitespace
} from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../object.mts'

describe('unit-d:ast/content/object', () => {
  describe('ObjectContent', () => {
    it('should equal ObjectContentMap[keyof ObjectContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.ObjectContentMap
      type Expect = TestSubject.ObjectContentMap[K]

      // Expect
      expectTypeOf<TestSubject.ObjectContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('ObjectContentMap', () => {
    it('should extend ExpressionMap', () => {
      expectTypeOf<TestSubject.ObjectContentMap>().toExtend<ExpressionMap>()
    })

    it('should match NodeObject<Break>', () => {
      expectTypeOf<TestSubject.ObjectContentMap>()
        .toExtend<NodeObject<Break>>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.ObjectContentMap>()
        .toExtend<NodeObject<Comment>>()
    })

    it('should match NodeObject<LinePrefix>', () => {
      expectTypeOf<TestSubject.ObjectContentMap>()
        .toExtend<NodeObject<LinePrefix>>()
    })

    it('should match NodeObject<ObjectMember>', () => {
      expectTypeOf<TestSubject.ObjectContentMap>()
        .toExtend<NodeObject<ObjectMember>>()
    })

    it('should match NodeObject<Whitespace>', () => {
      expectTypeOf<TestSubject.ObjectContentMap>()
        .toExtend<NodeObject<Whitespace>>()
    })

    it('should match NodeObject<UnexpectedValue>', () => {
      expectTypeOf<TestSubject.ObjectContentMap>()
        .toExtend<NodeObject<UnexpectedValue>>()
    })

    it('should match NodeObject<ValueSeparator>', () => {
      expectTypeOf<TestSubject.ObjectContentMap>()
        .toExtend<NodeObject<ValueSeparator>>()
    })
  })
})
