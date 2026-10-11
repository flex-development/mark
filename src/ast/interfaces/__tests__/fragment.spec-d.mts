/**
 * @file Type Tests - Fragment
 * @module mark/ast/interfaces/tests/unit-d/Fragment
 */

import type { FragmentChild } from '@flex-development/mark/ast'
import type { Parent } from 'unist'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../fragment.mts'

describe('unit-d:interfaces/Fragment', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toExtend<Parent>()
  })

  it('should match [children: FragmentChild[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<FragmentChild[]>()
  })

  it('should match [type: "fragment"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'fragment'>()
  })
})
