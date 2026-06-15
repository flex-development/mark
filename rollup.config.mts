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
 * The list of subdomains.
 *
 * @const {ReadonlyArray<Dirent>} subdomains
 */
const subdomains: readonly Dirent[] = listSubdomains()

/**
 * The list of subpath exports.
 *
 * @const {string[]} subpaths
 */
const subpaths: string[] = subdomains.map(sub => `${pkg.name}/${sub.name}`)

/**
 * The rollup configuration.
 *
 * @type {RollupOptions[]}
 */
export default subdomains.map((subdomain: Dirent): RollupOptions => {
  /**
   * The target file.
   *
   * @const {string} input
   */
  const input: string = `./dist/${subdomain.name}/index.d.mts`

  /**
   * The list of external dependencies.
   *
   * @const {Set<string>} external
   */
  const external: Set<string> = new Set(Object.keys(pkg.dependencies))

  // add subpath exports as external dependencies.
  for (const subpath of subpaths) {
    if (subpath !== `${pkg.name}/${subdomain.name}`) external.add(subpath)
  }

  return {
    /**
     * Determine if a module is external.
     *
     * @see https://rollupjs.org/configuration-options#external
     *
     * @this {void}
     *
     * @param {string} id
     *  The module id
     * @param {string | undefined} importer
     *  The path to the parent module
     * @param {boolean} isResolved
     *  Whether `id` has already been resolved
     * @return {boolean | null}
     *  Whether the module at `id` is external, or `null` to use rollup defaults
     */
    external(
      this: void,
      id: string,
      importer: string | undefined,
      isResolved: boolean
    ): boolean | null {
      return void importer, void isResolved, external.has(id)
    },
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
