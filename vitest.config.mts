/**
 * @file Configuration - Vitest
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import pathe from '@flex-development/pathe'
import ci from 'is-ci'
import type { Dirent } from 'node:fs'
import type { LabelColor } from 'vitest'
import {
  defineConfig,
  type ConfigEnv,
  type TestProjectInlineConfiguration,
  type ViteUserConfig
} from 'vitest/config'
import type { BuiltinEnvironment } from 'vitest/node'
import pkg from './package.json' with { type: 'json' }
import tsconfig from './tsconfig.json' with { type: 'json' }
import listSubdomains from './utils/list-subdomains.mts'

export default defineConfig(config)

/**
 * Create a vitest configuration.
 *
 * @see {@linkcode ConfigEnv}
 * @see {@linkcode ViteUserConfig}
 *
 * @this {void}
 *
 * @param {ConfigEnv} env
 *  The configuration environment
 * @return {ViteUserConfig}
 *  The vitest configuration object
 */
function config(this: void, env: ConfigEnv): ViteUserConfig {
  /**
   * The list of workspace directories.
   *
   * @const {ReadonlyArray<Dirent>} workspaces
   */
  const workspaces: readonly Dirent[] = listSubdomains()

  return {
    test: {
      outputFile: {
        blob: pathe.join('.vitest-reports', env.mode + '.blob.json'),
        json: pathe.join('__tests__', 'reports', env.mode + '.json'),
        junit: pathe.join('__tests__', 'reports', env.mode + '.junit.xml')
      },
      passWithNoTests: true,
      projects: workspaces.flatMap((
        subdomain: Dirent,
        groupOrder: number
      ): TestProjectInlineConfiguration[] => {
        const { customConditions } = tsconfig.compilerOptions

        /**
         * The list of environments to test in.
         *
         * @const {BuiltinEnvironment[]} environments
         */
        const environments: BuiltinEnvironment[] = ['node', 'happy-dom']

        return environments.map(environment => {
          /**
           * The list of conditions to apply.
           *
           * @const {string[]} conditions
           */
          const conditions: string[] = Object.assign([], customConditions)

          /**
           * The color of the project name label.
           *
           * @var {LabelColor} color
           */
          let color: LabelColor

          switch (environment) {
            case 'happy-dom':
              color = 'magenta'
              conditions.unshift('browser')
              break
            default:
              color = 'blackBright' as LabelColor
              break
          }

          return {
            extends: true as const,
            resolve: { conditions, preserveSymlinks: true },
            root: subdomain.parentPath,
            ssr: { resolve: { conditions } },
            test: {
              env: { VITEST_ENVIRONMENT: environment },
              environment,
              environmentOptions: {},
              include: [`${subdomain.name}/**/__tests__/*.spec.mts`],
              name: { color, label: subdomain.name + ':' + environment },
              sequence: { groupOrder },
              setupFiles: [],
              typecheck: {
                allowJs: false,
                checker: 'tsc',
                enabled: true,
                ignoreSourceErrors: false,
                include: [`${subdomain.name}/**/__tests__/*.spec-d.mts`],
                only: true,
                tsconfig: pathe.resolve('tsconfig.json')
              }
            }
          }
        })
      }),
      reporters: env.mode === 'reports'
        ? ['tree']
        : [
          ci ? 'github-actions' : new Notifier(),
          'blob',
          'json',
          ['junit', { suiteName: pkg.name }],
          ['tree']
        ]
    }
  }
}
