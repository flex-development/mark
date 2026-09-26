/**
 * @file Type Tests - Extensions
 * @module mark/parse/types/tests/unit-d/Extensions
 */

import type { List } from '@flex-development/mark/core'
import type { Extension } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extensions.mts'

describe('unit-d:types/Extensions', () => {
  it('should extract Extension', () => {
    expectTypeOf<TestSubject>().extract<Extension>().not.toBeNever()
  })

  it('should extract List<Extension>', () => {
    expectTypeOf<TestSubject>().extract<List<Extension>>().not.toBeNever()
  })
})
