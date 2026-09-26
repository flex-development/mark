/**
 * @file Type Tests - Root
 * @module mark/ast/interfaces/tests/unit-d/Root
 */

import type { Literal, Node, Parent } from 'unist'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../root.mts'

describe('unit-d:interfaces/Root', () => {
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
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'root'>()
  })
})
