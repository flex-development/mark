/**
 * @file Type Tests - Data
 * @module examples/jack/ast/interfaces/tests/unit-d/Data
 */

import type * as unist from 'unist'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../data.mts'

describe('unit-d:ast/interfaces/Data', () => {
  it('should extend unist.Data', () => {
    expectTypeOf<TestSubject>().toExtend<unist.Data>()
  })
})
