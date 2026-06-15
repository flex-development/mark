/**
 * @file Type Tests - InitialConstruct
 * @module fsm/parse/interfaces/tests/unit-d/InitialConstruct
 */

import type { Construct, Initializer } from '@flex-development/fsm/parse'
import type TestSubject from '../initial-construct.mts'

describe('unit-d:interfaces/InitialConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [tokenize: Initializer]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tokenize')
      .toEqualTypeOf<Initializer>()
  })
})
