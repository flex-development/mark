/**
 * @file Test Utilities - thrower
 * @module tests/utils/thrower
 */

import error from '#fixtures/boom'

/**
 * Throw the test error.
 *
 * @this {void}
 *
 * @return {never}
 *  Never; throws test error
 * @throws {Error}
 */
function thrower(this: void): never {
  throw error
}

export default thrower
