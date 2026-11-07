/**
 * @file Fixtures - initialize
 * @module fixtures/initialize
 */

import ct from '#fixtures/ct'
import type { InitialConstructs } from '@flex-development/mark/parse'
import { vi } from 'vitest'

/**
 * Record, where each key is a content type
 * and each value is a mock initial construct.
 *
 * @const {InitialConstructs} initialize
 */
const initialize: InitialConstructs = {
  [ct.comments]: { tokenize: vi.fn() },
  [ct.language]: { tokenize: vi.fn() },
  [ct.source]: { tokenize: vi.fn() }
}

export default initialize
