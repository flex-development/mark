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
      'ast',
      'character',
      'chore',
      'chunked',
      'combine-extensions',
      'compile',
      'core',
      'decode',
      'parse',
      'resolve-all',
      'serialize',
      'symbol'
    ])],
    'scope-max-length': [Severity.Error, 'always', Number.POSITIVE_INFINITY]
  }
}

export default config
