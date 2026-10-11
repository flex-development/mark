/**
 * @file Type Tests - FragmentChild
 * @module mark/ast/types/tests/unit-d/FragmentChild
 */

import type { FragmentChildMap } from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../fragment-child.mts'

describe('unit-d:types/FragmentChild', () => {
  it('should equal FragmentChildMap[keyof FragmentChildMap]', () => {
    // Arrange
    type Expect = FragmentChildMap[keyof FragmentChildMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
