/**
 * @file Type Tests - NodeMap
 * @module mark/ast/interfaces/tests/unit-d/NodeMap
 */

import type { Fragment } from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../node-map.mts'

describe('unit-d:interfaces/NodeMap', () => {
  it('should match [fragment: Fragment]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fragment')
      .toEqualTypeOf<Fragment>()
  })
})
