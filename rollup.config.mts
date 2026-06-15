/**
 * @file rollup
 * @module config/rollup
 */

import { EXPORT_AGGREGATE_REGEX } from '@flex-development/export-regex'
import { STATIC_IMPORT_REGEX } from '@flex-development/import-regex'
import resolve from '@rollup/plugin-node-resolve'
import { ok } from 'devlop'
import type { Dirent } from 'node:fs'
import type {
  NormalizedOutputOptions,
  OutputBundle,
  PluginContext,
  RollupOptions
} from 'rollup'
import { dts } from 'rollup-plugin-dts'
import pkg from './package.json' with { type: 'json' }
import listSubdomains from './utils/list-subdomains.mts'

/**
 * The rollup configuration.
 *
 * @type {RollupOptions[]}
 */
export default listSubdomains().map((subdomain: Dirent): RollupOptions => {
  /**
   * The target file.
   *
   * @const {string} input
   */
  const input: string = `./dist/${subdomain.name}/index.d.mts`

  return {
    external: Object.keys(pkg.dependencies),
    input,
    output: [{ file: input, format: 'esm' }],
    plugins: [
      resolve({ extensions: ['.d.mts', '.mts'] }),
      dts(),
      {
        /**
         * Re-add lost `type` modifiers.
         *
         * @see https://github.com/Swatinem/rollup-plugin-dts/issues/354
         *
         * @this {PluginContext}
         *
         * @param {NormalizedOutputOptions} options
         *  The normalized output options
         * @param {OutputBundle} bundle
         *  The output bundle object
         * @return {undefined}
         */
        generateBundle(
          this: PluginContext,
          options: NormalizedOutputOptions,
          bundle: OutputBundle
        ): undefined {
          for (const output of Object.values(bundle)) {
            if (output.type === 'chunk') {
              output.code = output.code.replace(EXPORT_AGGREGATE_REGEX, (
                match: string,
                type: string | undefined,
                exports: string,
                specifier: string | undefined
              ) => {
                ok(specifier, 'expected `specifier`')
                return type ? match : match.replace('export {', 'export type {')
              })

              output.code = output.code.replace(STATIC_IMPORT_REGEX, (
                match: string,
                type: string | undefined
              ) => {
                return type ? match : match.replace('import', 'import type')
              })
            }
          }

          return void this
        },

        /**
         * The plugin name.
         */
        name: 'dts:fix'
      }
    ]
  }
})
