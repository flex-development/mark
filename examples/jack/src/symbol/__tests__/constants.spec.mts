/**
 * @file Unit Tests - constants
 * @module examples/jack/symbol/tests/unit/constants
 */

import * as micromark from 'micromark-util-symbol'
import { describe, expect, it } from 'vitest'
import testSubject from '../constants.mts'

describe('unit:symbol/constants', () => {
  it('should be constants dictionary', () => {
    expect(testSubject).toMatchSnapshot()
  })

  it('should match micromark.constants', () => {
    expect(testSubject).toMatchObject(micromark.constants)
  })
})
