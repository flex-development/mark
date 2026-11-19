/**
 * @file Type Tests - ContainerPhase
 * @module examples/jack/parse/types/tests/unit-d/ContainerPhase
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../container-phase.mts'

describe('unit-d:parse/types/ContainerPhase', () => {
  it('should extract "afterSeparator"', () => {
    expectTypeOf<TestSubject>().extract<'afterSeparator'>().not.toBeNever()
  })

  it('should extract "afterValue"', () => {
    expectTypeOf<TestSubject>().extract<'afterValue'>().not.toBeNever()
  })

  it('should extract "initial"', () => {
    expectTypeOf<TestSubject>().extract<'initial'>().not.toBeNever()
  })
})
