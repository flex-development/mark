/**
 * @file Type Tests - Options
 * @module mark-compiler/compile/interfaces/tests/unit-d/Options
 */

import type { FinalizeContext } from '@flex-development/mark-compiler/compile'
import type {
  Buffer,
  Extensions,
  Postprocess,
  Preprocess,
  SerializeValue,
  TakeExtension
} from '@flex-development/mark/compile'
import type { Point } from '@flex-development/mark/parse'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../options.mts'

describe('unit-d:compile/interfaces/Options', () => {
  type Optional = OptionalKeys<TestSubject>
  type Required = RequiredKeys<TestSubject>

  it('should match [buffer: Buffer]', () => {
    expectTypeOf<Required>().extract<'buffer'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('buffer').toEqualTypeOf<Buffer>()
  })

  it('should match [extensions?: Extensions | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'extensions'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('extensions')
      .toEqualTypeOf<Nilable<Extensions>>()
  })

  it('should match [finalizeContext?: FinalizeContext | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'finalizeContext'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('finalizeContext')
      .toEqualTypeOf<Nilable<FinalizeContext>>()
  })

  it('should match [from?: Point | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'from'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('from')
      .toEqualTypeOf<Nilable<Point>>()
  })

  it('should match [postprocess?: Postprocess | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'postprocess'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('postprocess')
      .toEqualTypeOf<Nilable<Postprocess>>()
  })

  it('should match [preprocess?: Preprocess | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'preprocess'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('preprocess')
      .toEqualTypeOf<Nilable<Preprocess>>()
  })

  it('should match [serializeValue?: SerializeValue | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'serializeValue'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('serializeValue')
      .toEqualTypeOf<Nilable<SerializeValue>>()
  })

  it('should match [takeExtension?: TakeExtension | null | undefined]', () => {
    expectTypeOf<Optional>().extract<'takeExtension'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('takeExtension')
      .toEqualTypeOf<Nilable<TakeExtension>>()
  })
})
