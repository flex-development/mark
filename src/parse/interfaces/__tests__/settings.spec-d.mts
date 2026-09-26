/**
 * @file Type Tests - Extension
 * @module mark/parse/interfaces/tests/unit-d/Extension
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../settings.mts'

describe('unit-d:interfaces/Settings', () => {
  it('should register custom settings', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<'sass'>()
  })
})
