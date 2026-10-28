/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'
import pathe from '@flex-development/pathe'

/**
 * The eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 * @const config
 */
const config = [
  ...fldv.configs.node,
  {
    files: ['**/*.+(cjs|cts|js|jsx|mjs|mts|ts|tsx)'],
    languageOptions: {
      parserOptions: {
        project: pathe.resolve('tsconfig.eslint.json')
      }
    }
  },
  {
    files: [
      'packages/mark/src/parse/interfaces/__tests__/encoding-map.spec-d.mts',
      'packages/mark/src/parse/interfaces/encoding-map.mts'
    ],
    rules: {
      'unicorn/text-encoding-identifier-case': 0
    }
  },
  {
    files: ['packages/mark/src/parse/interfaces/preprocessor.mts'],
    rules: {
      'jsdoc/valid-types': 0
    }
  },
  {
    files: [
      'packages/mark-parser/__fixtures__/constructs/**/*.mts',
      'packages/mark-parser/src/constructs/initialize.mts',
      'packages/mark-parser/src/create-tokenizer.mts'
    ],
    rules: {
      'unicorn/no-this-assignment': 0
    }
  },
  {
    files: ['packages/mark-parser/__fixtures__/markdown/*.md'],
    rules: {
      'mdx/remark': 0
    }
  },
  {
    files: ['packages/mark-parser/src/create-tokenizer.mts'],
    rules: {
      'node/no-unsupported-features/node-builtins': [
        2,
        {
          allowExperimental: true,
          version: '>=17.0.0'
        }
      ]
    }
  },
  {
    files: ['packages/mark-util-chunked/src/splice.mts'],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 0
    }
  },
  {
    files: ['packages/mark-util-symbol/src/codes.mts'],
    rules: {
      'sort-keys': 0
    }
  }
]

export default config
