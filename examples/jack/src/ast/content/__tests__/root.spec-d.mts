/**
 * @file Type Tests - root
 * @module examples/jack/ast/content/tests/unit-d/root
 */

import type NodeObject from '#tests/types/node-object'
import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  LinePrefix,
  UnexpectedValue,
  Whitespace
} from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../root.mts'

describe('unit-d:ast/content/root', () => {
  describe('RootContent', () => {
    it('should equal RootContentMap[keyof RootContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.RootContentMap
      type Expect = TestSubject.RootContentMap[K]

      // Expect
      expectTypeOf<TestSubject.RootContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('RootContentMap', () => {
    it('should extend ExpressionMap', () => {
      expectTypeOf<TestSubject.RootContentMap>().toExtend<ExpressionMap>()
    })

    it('should match NodeObject<Break>', () => {
      expectTypeOf<TestSubject.RootContentMap>()
        .toExtend<NodeObject<Break>>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.RootContentMap>()
        .toExtend<NodeObject<Comment>>()
    })

    it('should match NodeObject<LinePrefix>', () => {
      expectTypeOf<TestSubject.RootContentMap>()
        .toExtend<NodeObject<LinePrefix>>()
    })

    it('should match NodeObject<Whitespace>', () => {
      expectTypeOf<TestSubject.RootContentMap>()
        .toExtend<NodeObject<Whitespace>>()
    })

    it('should match NodeObject<UnexpectedValue>', () => {
      expectTypeOf<TestSubject.RootContentMap>()
        .toExtend<NodeObject<UnexpectedValue>>()
    })
  })
})
