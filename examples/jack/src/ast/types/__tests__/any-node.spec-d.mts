/**
 * @file Type Tests - AnyNode
 * @module examples/jack/ast/types/tests/unit-d/AnyNode
 */

import type { Root } from '@flex-development/jack/ast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../any-node.mts'

describe('unit-d:ast/types/AnyNode', () => {
  it('should equal InclusiveDescendant<Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<InclusiveDescendant<Root>>()
  })
})
