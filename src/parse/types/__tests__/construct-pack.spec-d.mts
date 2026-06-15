/**
 * @file Type Tests - ConstructPack
 * @module fsm/parse/types/tests/unit-d/ConstructPack
 */

import type { Construct } from '@flex-development/fsm/parse'
import type TestSubject from '../construct-pack.mts'

describe('unit-d:types/ConstructPack', () => {
  it('should extract Construct', () => {
    expectTypeOf<TestSubject>().extract<Construct>().not.toBeNever()
  })

  it('should extract Construct[]', () => {
    expectTypeOf<TestSubject>().extract<Construct[]>().not.toBeNever()
  })
})
