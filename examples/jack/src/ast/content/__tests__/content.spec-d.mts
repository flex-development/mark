/**
 * @file Type Tests - content
 * @module examples/jack/ast/content/tests/unit-d/content
 */

import type {
  ArrayContent,
  ObjectContent,
  RootContent,
  StringContent
} from '@flex-development/jack/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../content.mts'

describe('unit-d:ast/content/content', () => {
  it('should allow ArrayContent', () => {
    expectTypeOf<TestSubject>().extract<ArrayContent>()
  })

  it('should allow ObjectContent', () => {
    expectTypeOf<TestSubject>().extract<ObjectContent>()
  })

  it('should allow RootContent', () => {
    expectTypeOf<TestSubject>().extract<RootContent>()
  })

  it('should allow StringContent', () => {
    expectTypeOf<TestSubject>().extract<StringContent>()
  })
})
