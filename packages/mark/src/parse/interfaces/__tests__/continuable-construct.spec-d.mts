/**
 * @file Type Tests - ContinuableConstruct
 * @module mark/parse/interfaces/tests/unit-d/ContinuableConstruct
 */

import type { Construct, Exiter } from '@flex-development/mark/parse'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../continuable-construct.mts'

describe('unit-d:parse/interfaces/ContinuableConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [continuation: Construct]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('continuation')
      .toEqualTypeOf<Construct>()
  })

  it('should match [exit: Exiter]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('exit').toEqualTypeOf<Exiter>()
  })
})
