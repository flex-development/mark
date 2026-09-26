/**
 * @file Type Tests - Node
 * @module mark/ast/types/tests/unit-d/Node
 */

import type { NodeMap } from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../node.mts'

describe('unit-d:types/Node', () => {
  it('should equal NodeMap[keyof NodeMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<NodeMap[keyof NodeMap]>()
  })
})
