/**
 * @file Type Tests - ConstructPack
 * @module mark/parse/types/tests/unit-d/ConstructPack
 */

import type { Construct } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../construct-pack.mts'

describe('unit-d:types/ConstructPack', () => {
  it('should extract Construct', () => {
    expectTypeOf<TestSubject>().extract<Construct>().not.toBeNever()
  })

  it('should extract Construct[]', () => {
    expectTypeOf<TestSubject>().extract<Construct[]>().not.toBeNever()
  })
})
