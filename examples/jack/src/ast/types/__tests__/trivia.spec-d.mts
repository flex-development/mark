/**
 * @file Type Tests - Trivia
 * @module examples/jack/types/tests/unit-d/Trivia
 */

import type { Comment } from '@flex-development/docast'
import type { Break, LinePrefix, Whitespace } from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../trivia.mts'

describe('unit-d:ast/types/Trivia', () => {
  it('should extract Break', () => {
    expectTypeOf<TestSubject>().extract<Break>().not.toBeNever()
  })

  it('should extract Comment', () => {
    expectTypeOf<TestSubject>().extract<Comment>().not.toBeNever()
  })

  it('should extract LinePrefix', () => {
    expectTypeOf<TestSubject>().extract<LinePrefix>().not.toBeNever()
  })

  it('should extract Whitespace', () => {
    expectTypeOf<TestSubject>().extract<Whitespace>().not.toBeNever()
  })
})
