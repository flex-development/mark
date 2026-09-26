/**
 * @file Type Tests - Constructs
 * @module mark/parse/types/tests/unit-d/Constructs
 */

import type {
  ConstructPack,
  ConstructRecord
} from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../constructs.mts'

describe('unit-d:types/Constructs', () => {
  it('should extract ConstructPack', () => {
    expectTypeOf<TestSubject>().extract<ConstructPack>().not.toBeNever()
  })

  it('should extract ConstructRecord', () => {
    expectTypeOf<TestSubject>().extract<ConstructRecord>().not.toBeNever()
  })
})
