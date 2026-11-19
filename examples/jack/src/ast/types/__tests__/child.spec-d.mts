/**
 * @file Type Tests - Child
 * @module examples/jack/ast/types/tests/unit-d/Child
 */

import type { AnyParent } from '@flex-development/jack/ast'
import type { Children } from '@flex-development/unist-util-types'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../child.mts'

describe('unit-d:ast/types/Child', () => {
  it('should equal Children<AnyParent>[number]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Children<AnyParent>[number]>()
  })
})
