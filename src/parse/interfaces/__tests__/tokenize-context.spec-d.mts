/**
 * @file Type Tests - TokenizeContext
 * @module mark/parse/interfaces/tests/unit-d/TokenizeContext
 */

import type {
  Code,
  Construct,
  ContainerState,
  ContentType,
  CreateToken,
  DefineSkip,
  Event,
  Now,
  ParseContext,
  SliceSerialize,
  SliceStream,
  Write
} from '@flex-development/mark/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../tokenize-context.mts'

describe('unit-d:interfaces/TokenizeContext', () => {
  it('should match [code: Code]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('code').toEqualTypeOf<Code>()
  })

  it('should match [containerState?: ContainerState | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('containerState')
      .toEqualTypeOf<Nilable<ContainerState>>()
  })

  it('should match [contentType?: ContentType | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('contentType')
      .toEqualTypeOf<Nilable<ContentType>>()
  })

  it('should match [currentConstruct?: Construct | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('currentConstruct')
      .toEqualTypeOf<Nilable<Construct>>()
  })

  it('should match [defineSkip: DefineSkip]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('defineSkip')
      .toEqualTypeOf<DefineSkip>()
  })

  it('should match [events: Event[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('events')
      .toEqualTypeOf<Event[]>()
  })

  it('should match [interrupt?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('interrupt')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [now: Now]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('now').toEqualTypeOf<Now>()
  })

  it('should match [noEmptyTokens?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmptyTokens')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noPrevious?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noPrevious')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [parser: ParseContext]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parser')
      .toEqualTypeOf<ParseContext>()
  })

  it('should match [previous: Code]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('previous').toEqualTypeOf<Code>()
  })

  it('should match [sliceSerialize: SliceSerialize]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sliceSerialize')
      .toEqualTypeOf<SliceSerialize>()
  })

  it('should match [sliceStream: SliceStream]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sliceStream')
      .toEqualTypeOf<SliceStream>()
  })

  it('should match [token: CreateToken]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('token')
      .toEqualTypeOf<CreateToken>()
  })

  it('should match [write: Write]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('write').toEqualTypeOf<Write>()
  })
})
