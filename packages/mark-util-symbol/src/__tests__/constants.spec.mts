/**
 * @file Unit Tests - constants
 * @module mark-util-symbol/tests/unit/constants
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../constants.mts'

describe('unit:constants', () => {
  it('should be constants dictionary', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
