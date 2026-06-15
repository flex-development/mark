/**
 * @file Type Tests - NamedConstruct
 * @module fsm/parse/interfaces/tests/unit-d/NamedConstruct
 */

import type { Construct } from '@flex-development/fsm/parse'
import type TestSubject from '../named-construct.mts'

describe('unit-d:interfaces/NamedConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<string>()
  })
})
