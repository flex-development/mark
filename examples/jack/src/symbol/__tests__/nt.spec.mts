/**
 * @file Unit Tests - nt
 * @module examples/jack/symbol/tests/unit/nt
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../nt.mts'

describe('unit:symbol/nt', () => {
  it('should be node type dictionary', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
