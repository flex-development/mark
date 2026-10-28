/**
 * @file Fixtures - error
 * @module fixtures/error
 */

/**
 * A test error.
 *
 * @type {Error}
 */
export default new Error('boom!', { cause: { test: true } })
