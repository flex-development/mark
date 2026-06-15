/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'

/**
 * The eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 * @const config
 */
const config = [
  ...fldv.configs.node,
  {
    files: [
      'src/parse/interfaces/__tests__/encoding-map.spec-d.mts',
      'src/parse/interfaces/encoding-map.mts'
    ],
    rules: {
      'unicorn/text-encoding-identifier-case': 0
    }
  }
]

export default config
