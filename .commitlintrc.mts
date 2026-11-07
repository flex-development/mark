/**
 * @file Configuration - commitlint
 * @module config/commitlint
 * @see https://commitlint.js.org
 */

import {
  RuleConfigSeverity as Severity,
  type UserConfig
} from '@commitlint/types'
import { scopes } from '@flex-development/commitlint-config'

/**
 * The `commitlint` configuration object.
 *
 * @const {UserConfig} config
 */
const config: UserConfig = {
  extends: ['@flex-development'],
  rules: {
    'scope-enum': [Severity.Error, 'always', scopes([
      'character',
      'chore',
      'chunked',
      'combine-extensions',
      'compiler',
      'decode',
      'factory-markers',
      'factory-space',
      'parser',
      'resolve-all',
      'serialize',
      'subtokenize',
      'symbol'
    ])],
    'scope-max-length': [Severity.Error, 'always', Number.POSITIVE_INFINITY]
  }
}

export default config
