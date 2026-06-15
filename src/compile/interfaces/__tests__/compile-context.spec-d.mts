/**
 * @file Type Tests - CompileContext
 * @module fsm/compile/interfaces/tests/unit-d/CompileContext
 */

import type {
  Buffer,
  Compile,
  CompileData,
  CompileValue,
  Config,
  Enter,
  Exit,
  Preprocess,
  Resume,
  StackedToken
} from '@flex-development/fsm/compile'
import type { Point, SliceSerialize } from '@flex-development/fsm/parse'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../compile-context.mts'

describe('unit-d:interfaces/CompileContext', () => {
  it('should match [buffer: Buffer]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('buffer').toEqualTypeOf<Buffer>()
  })

  it('should match [compile: Compile]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('compile')
      .toEqualTypeOf<Compile>()
  })

  it('should match [config: Config]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('config').toEqualTypeOf<Config>()
  })

  it('should match [data: CompileData]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<CompileData>()
  })

  it('should match [enter: Enter]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('enter').toEqualTypeOf<Enter>()
  })

  it('should match [exit: Exit]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('exit').toEqualTypeOf<Exit>()
  })

  it('should match [from: Point]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('from').toEqualTypeOf<Point>()
  })

  it('should match [preprocess?: Preprocess | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preprocess')
      .toEqualTypeOf<Nilable<Preprocess>>()
  })

  it('should match [resume: Resume]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('resume').toEqualTypeOf<Resume>()
  })

  it('should match [sliceSerialize: SliceSerialize]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sliceSerialize')
      .toEqualTypeOf<SliceSerialize>()
  })

  it('should match [stack: CompileValue[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stack')
      .toEqualTypeOf<CompileValue[]>()
  })

  it('should match [tokenStack: StackedToken[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tokenStack')
      .toEqualTypeOf<StackedToken[]>()
  })
})
