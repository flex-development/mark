/**
 * @file Type Tests - Constructs
 * @module fsm/parse/types/tests/unit-d/Constructs
 */

import type {
  ConstructPack,
  ConstructRecord
} from '@flex-development/fsm/parse'
import type TestSubject from '../constructs.mts'

describe('unit-d:types/Constructs', () => {
  it('should extract ConstructPack', () => {
    expectTypeOf<TestSubject>().extract<ConstructPack>().not.toBeNever()
  })

  it('should extract ConstructRecord', () => {
    expectTypeOf<TestSubject>().extract<ConstructRecord>().not.toBeNever()
  })
})
