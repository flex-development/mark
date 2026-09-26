/**
 * @file Type Tests - Point
 * @module mark/parse/interfaces/tests/unit-d/Point
 */

import type { Column, Line, Offset } from '@flex-development/unist-util-types'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../point.mts'

describe('unit-d:interfaces/Point', () => {
  it('should match [column: Column]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('column').toEqualTypeOf<Column>()
  })

  it('should match [line: Line]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('line').toEqualTypeOf<Line>()
  })

  it('should match [offset: Offset]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('offset').toEqualTypeOf<Offset>()
  })
})
