/**
 * @file Type Tests - objectMember
 * @module examples/jack/ast/content/tests/unit-d/objectMember
 */

import type NodeObject from '#tests/types/node-object'
import type { Comment } from '@flex-development/docast'
import type {
  Break,
  ExpressionMap,
  FieldSeparator,
  LinePrefix,
  Whitespace
} from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../object-member.mts'

describe('unit-d:ast/content/objectMember', () => {
  describe('ObjectMemberContent', () => {
    it('should equal ObjectMemberContentMap[keyof ObjectMemberContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.ObjectMemberContentMap
      type Expect = TestSubject.ObjectMemberContentMap[K]

      // Expect
      expectTypeOf<TestSubject.ObjectMemberContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('ObjectMemberContentMap', () => {
    it('should extend ExpressionMap', () => {
      expectTypeOf<TestSubject.ObjectMemberContentMap>()
        .toExtend<ExpressionMap>()
    })

    it('should match NodeObject<Break>', () => {
      expectTypeOf<TestSubject.ObjectMemberContentMap>()
        .toExtend<NodeObject<Break>>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.ObjectMemberContentMap>()
        .toExtend<NodeObject<Comment>>()
    })

    it('should match NodeObject<FieldSeparator>', () => {
      expectTypeOf<TestSubject.ObjectMemberContentMap>()
        .toExtend<NodeObject<FieldSeparator>>()
    })

    it('should match NodeObject<LinePrefix>', () => {
      expectTypeOf<TestSubject.ObjectMemberContentMap>()
        .toExtend<NodeObject<LinePrefix>>()
    })

    it('should match NodeObject<Whitespace>', () => {
      expectTypeOf<TestSubject.ObjectMemberContentMap>()
        .toExtend<NodeObject<Whitespace>>()
    })
  })
})
