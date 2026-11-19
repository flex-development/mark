/**
 * @file Type Tests - node
 * @module examples/jack/ast/content/tests/unit-d/node
 */

import type * as docast from '@flex-development/docast'
import type { Break, Root } from '@flex-development/jack/ast'
import type {
  InclusiveDescendant,
  Type
} from '@flex-development/unist-util-types'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../node.mts'

describe('unit-d:ast/content/node', () => {
  describe('JackNode', () => {
    it('should equal NodeMap[keyof NodeMap]', () => {
      // Arrange
      type K = keyof TestSubject.NodeMap
      type Expect = TestSubject.NodeMap[K]

      // Expect
      expectTypeOf<TestSubject.JackNode>().toEqualTypeOf<Expect>()
    })
  })

  describe('NodeMap', () => {
    type Test =
      | Exclude<InclusiveDescendant<Root>, InclusiveDescendant<docast.Root>>
      | Break

    it('should register all jack nodes', () => {
      // Arrange
      type Nodes = TestSubject.NodeMap[keyof TestSubject.NodeMap]

      // Expect
      expectTypeOf<Exclude<Test, Nodes>>().toEqualTypeOf<never>()
      expectTypeOf<keyof TestSubject.NodeMap>().toEqualTypeOf<Type<Test>>()
    })
  })
})
