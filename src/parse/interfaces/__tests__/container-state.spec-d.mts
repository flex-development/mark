/**
 * @file Type Tests - ContainerState
 * @module mark/parse/interfaces/tests/unit-d/ContainerState
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../container-state.mts'

describe('unit-d:interfaces/ContainerState', () => {
  it('should register custom fields', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
