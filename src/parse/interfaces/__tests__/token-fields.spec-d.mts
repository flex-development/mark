/**
 * @file Type Tests - TokenFields
 * @module mark/parse/interfaces/tests/unit-d/TokenFields
 */

import type TestSubject from '../token-fields.mts'

describe('unit-d:interfaces/TokenFields', () => {
  it('should register token fields', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
