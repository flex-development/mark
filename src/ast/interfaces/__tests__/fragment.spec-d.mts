/**
 * @file Type Tests - Fragment
 * @module mark/ast/interfaces/tests/unit-d/Fragment
 */

import type { Literal, Node, Parent } from 'unist'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../fragment.mts'

describe('unit-d:interfaces/Fragment', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toExtend<Parent>()
  })

  it('should match [children: Child[]]', () => {
    // Arrange
    type Child = Literal | Node | Parent

    // Expect
    expectTypeOf<TestSubject<Child>>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })

  it('should match [type: "fragment"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'fragment'>()
  })
})
