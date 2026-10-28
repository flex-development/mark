/**
 * @file Type Tests - NamedConstruct
 * @module mark/parse/interfaces/tests/unit-d/NamedConstruct
 */

import type { Construct } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../named-construct.mts'

describe('unit-d:interfaces/NamedConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<string>()
  })
})
