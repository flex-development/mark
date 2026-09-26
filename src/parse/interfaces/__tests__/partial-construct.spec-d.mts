/**
 * @file Type Tests - PartialConstruct
 * @module mark/parse/interfaces/tests/unit-d/PartialConstruct
 */

import type { Construct } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../partial-construct.mts'

describe('unit-d:interfaces/PartialConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [partial: true]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('partial').toEqualTypeOf<true>()
  })
})
