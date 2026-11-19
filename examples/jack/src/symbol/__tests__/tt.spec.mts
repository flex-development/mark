/**
 * @file Unit Tests - tt
 * @module examples/jack/symbol/tests/unit/tt
 */

import * as micromark from 'micromark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../tt.mts'

describe('unit:symbol/tt', () => {
  it('should be token type dictionary', () => {
    expect(testSubject).toMatchSnapshot()
  })

  it('should be superset of micromark.types', () => {
    expect(testSubject).toMatchObject(micromark.types)
  })
})
