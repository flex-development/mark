/**
 * @file Type Tests - string
 * @module examples/jack/ast/content/tests/unit-d/string
 */

import type NodeObject from '#tests/types/node-object'
import type {
  CharacterEscape,
  HexEscape,
  NulEscape,
  UnicodeEscape,
  Whitespace
} from '@flex-development/jack/ast'
import * as mdast from 'mdast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../string.mts'

describe('unit-d:ast/content/string', () => {
  describe('StringContent', () => {
    it('should equal StringContentMap[keyof StringContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.StringContentMap
      type Expect = TestSubject.StringContentMap[K]

      // Expect
      expectTypeOf<TestSubject.StringContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('StringContentMap', () => {
    it('should extend mdast.PhrasingContentMap', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toExtend<mdast.PhrasingContentMap>()
    })

    it('should match [commentLinePrefix: never]', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toHaveProperty('commentLinePrefix')
        .toEqualTypeOf<never>()
    })

    it('should match [inlineTag: never]', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toHaveProperty('inlineTag')
        .toEqualTypeOf<never>()
    })

    it('should match NodeObject<CharacterEscape>', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toExtend<NodeObject<CharacterEscape>>()
    })

    it('should match NodeObject<HexEscape>', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toExtend<NodeObject<HexEscape>>()
    })

    it('should match NodeObject<NulEscape>', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toExtend<NodeObject<NulEscape>>()
    })

    it('should match NodeObject<UnicodeEscape>', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toExtend<NodeObject<UnicodeEscape>>()
    })

    it('should match NodeObject<Whitespace>', () => {
      expectTypeOf<TestSubject.StringContentMap>()
        .toExtend<NodeObject<Whitespace>>()
    })
  })
})
