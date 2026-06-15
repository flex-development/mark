/**
 * @file Type Tests - List
 * @module fsm/parse/types/tests/unit-d/List
 */

import type TestSubject from '../list.mts'

describe('unit-d:types/List', () => {
  type T = string
  type Subject = TestSubject<T>

  it('should extract ReadonlySet<T>', () => {
    expectTypeOf<Subject>().extract<ReadonlySet<T>>().not.toBeNever()
  })

  it('should extract readonly T[]', () => {
    expectTypeOf<Subject>().extract<readonly T[]>().not.toBeNever()
  })
})
