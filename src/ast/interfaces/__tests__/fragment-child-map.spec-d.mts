/**
 * @file Type Tests - FragmentChildMap
 * @module mark/ast/interfaces/tests/unit-d/FragmentChildMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../fragment-child-map.mts'

describe('unit-d:interfaces/FragmentChildMap', () => {
  it('should register custom child nodes', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
