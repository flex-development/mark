/**
 * @file Type Tests - CompileContext
 * @module mark/ast/interfaces/tests/unit-d/CompileContext
 */

import type {
  Buffer,
  Compile,
  CompileData,
  Config,
  Enter,
  Exit,
  Node,
  Preprocess,
  Resume
} from '@flex-development/mark/ast'
import type * as compile from '@flex-development/mark/compile'
import type { Nilable } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-context.mts'

describe('unit-d:interfaces/CompileContext', () => {
  it('should extend compile.CompileContext', () => {
    expectTypeOf<TestSubject>().toExtend<compile.CompileContext>()
  })

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

  it('should match [preprocess?: Preprocess | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preprocess')
      .toEqualTypeOf<Nilable<Preprocess>>()
  })

  it('should match [resume: Resume]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('resume').toEqualTypeOf<Resume>()
  })

  it('should match [stack: Node[]]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('stack').toEqualTypeOf<Node[]>()
  })
})
