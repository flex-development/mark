/**
 * @file rollup
 * @module config/rollup
 */

import workspaces, { type Workspace } from '#utils/list-workspaces'
import { codecovRollupPlugin as codecov } from '@codecov/rollup-plugin'
import { EXPORT_AGGREGATE_REGEX } from '@flex-development/export-regex'
import { STATIC_IMPORT_REGEX } from '@flex-development/import-regex'
import { isBareSpecifier, packageExportsResolve } from '@flex-development/mlly'
import pathe from '@flex-development/pathe'
import resolve from '@rollup/plugin-node-resolve'
import { ok } from 'devlop'
import ci from 'is-ci'
import fs from 'node:fs/promises'
import type {
  NormalizedOutputOptions,
  OutputBundle,
  OutputOptions,
  Plugin,
  PluginContext,
  RollupOptions
} from 'rollup'
import cleanup from 'rollup-plugin-cleanup'
import { dts as dtsBundle } from 'rollup-plugin-dts'

export default options

/**
 * Create a list of rollup options.
 *
 * @this {void}
 *
 * @return {RollupOptions[]}
 *  The list of options
 */
function options(this: void): RollupOptions[] {
  return workspaces().flatMap((
    workspace: Workspace,
    index: number,
    workspaces: Workspace[]
  ): RollupOptions[] => {
    const { manifest, name: workspaceName, parentPath, url } = workspace

    /**
     * The relative path to the workspace root.
     *
     * @const {string} workdir
     */
    const workdir: string = pathe.join(parentPath, workspaceName)

    ok(manifest, 'expected package `manifest`')
    ok(manifest.exports, 'expected package `exports`')
    ok(typeof manifest.exports === 'object', 'expected `exports` object')
    ok(!Array.isArray(manifest.exports), 'did not expect `exports` array')

    /**
     * The list of target files.
     *
     * The first value is a record where each key is an entry file name
     * and each value is the relative path to the target `mjs` file.\
     * All remaining values are `dts` target files.
     *
     * @const {[Record<string, string>, ...string[]]} files
     */
    const files: [mjs: Record<string, string>, ...dts: string[]] = [{}]

    // build the dts target file list and mjs target file record.
    for (const subpath of Object.keys(manifest.exports)) {
      if (subpath === './package.json') continue

      /**
       * The resolved package export URL.
       *
       * @const {URL} resolved
       */
      const resolved: URL = packageExportsResolve(
        url,
        subpath,
        manifest.exports,
        undefined,
        import.meta.url
      )

      /**
       * The relative path to the target file.
       *
       * @const {string} target
       */
      const target: string = resolved.pathname.slice(url.pathname.length)

      // dts target encountered.
      if (target.endsWith('.d.mts')) {
        files.push(pathe.join(workdir, target))
        continue
      }

      // mjs target encountered.
      ok(target.endsWith('.mjs'), 'expected `mjs` target file')

      // add corresponding dts entry point.
      files.push(pathe.join(workdir, pathe.changeExt(target, '.d.mts')))

      /**
       * The entry file name.
       *
       * @var {string} entry
       */
      let entry: string

      // remove the output directory.
      entry = target.slice(target.indexOf(pathe.sep) + 1)

      // remove the file extension.
      entry = entry.slice(0, entry.lastIndexOf(pathe.dot))

      // add target file to map.
      files[0][entry] = pathe.join(workdir, target)
    }

    // remove empty entry file record.
    if (!Object.keys(files[0]).length) files.shift()

    // generate the list of options.
    return files.map(input => {
      /**
       * The list of plugins.
       *
       * @const {(Plugin | Plugin[])[]} plugins
       */
      const plugins: (Plugin | Plugin[])[] = [trash()]

      /**
       * The output options.
       *
       * @var {OutputOptions} output
       */
      let output: OutputOptions

      if (typeof input === 'string') {
        // bundle declaration files and fix `type` modifiers.
        plugins.unshift(dts(workspace))

        // locate modules using the node resolution algorithm.
        plugins.unshift(resolve({ extensions: ['.d.mts', '.mts'] }))

        // set output settings.
        output = { file: input, format: 'esm' }
      } else {
        // support codecov bundle analysis.
        plugins.unshift(codecov({
          bundleName: manifest.name!,
          debug: true,
          enableBundleAnalysis: ci,
          uploadToken: process.env['CODECOV_TOKEN']!
        }))

        // remove extraneous comments.
        plugins.unshift(cleanup({ comments: 'none' }))

        // locate modules using the node resolution algorithm.
        plugins.unshift(resolve())

        // set output options.
        output = {
          chunkFileNames: 'shared/[name].mjs',
          dir: pathe.join(workdir, 'dist'),
          entryFileNames: '[name].mjs',
          format: 'esm'
        }
      }

      // add global plugins.
      plugins.push(trash())

      return {
        /**
         * Determine if a module is external.
         *
         * @see https://rollupjs.org/configuration-options#external
         *
         * @this {void}
         *
         * @param {string} id
         *  The module id to check
         * @param {string | undefined} importer
         *  The path to the parent module
         * @return {boolean | null}
         *  Whether the module at `id` is external,
         *  or `null` to use rollup defaults
         */
        external(
          this: void,
          id: string,
          importer: string | undefined
        ): boolean | null {
          // package cannot be external to itself.
          if (id === manifest.name) return false

          // no dependencies to check.
          if (!manifest.dependencies) return false

          // only bare specifiers can be marked as external.
          if (!isBareSpecifier(id)) return false

          // mark production dependencies as external.
          for (const dependency of Object.keys(manifest.dependencies)) {
            /**
             * The corresponding workspace.
             *
             * @const {Workspace | undefined} workspace
             */
            const workspace: Workspace | undefined = workspaces.find(sub => {
              return dependency === sub.manifest.name
            })

            // externalize non-workspace dependency.
            if (!workspace) {
              if (id === dependency) return true
              continue
            }

            // get workspace manifest.
            // eslint-disable-next-line unicorn/consistent-destructuring
            const { exports, name } = workspace.manifest

            ok(exports, 'expected package `exports`')
            ok(typeof exports === 'object', 'expected `exports` object')
            ok(!Array.isArray(exports), 'did not expect `exports` array')

            // add subpath exports to external dependencies.
            for (const subpath of Object.keys(exports)) {
              ok(name, 'expected package manifest `name`')
              if (id === name + subpath.slice(1)) return true
            }
          }

          ok(manifest.name, 'expected package manifest `name`')

          if (id.startsWith(manifest.name + pathe.sep)) {
            ok(importer, 'expected parent module path')

            /**
             * The path to the output file.
             *
             * @var {string} outfile
             */
            let outfile: string = importer.slice(url.pathname.length)

            /**
             * The imported subpath.
             *
             * @var {string} subpath
             */
            let subpath: string = id.slice(manifest.name.length + 1)

            // remove output directory from outfile.
            outfile = outfile.replace(/^dist\//, '')

            // mark subpath as external if not imported by a child module.
            if (!outfile.startsWith(subpath + pathe.sep)) return true

            const { exports } = manifest

            ok(exports, 'expected package `exports`')
            ok(typeof exports === 'object', 'expected `exports` object')
            ok(!Array.isArray(exports), 'did not expect `exports` array')

            subpath = outfile
            subpath = pathe.removeExt(subpath, pathe.extname(subpath))
            subpath = './' + pathe.removeExt(subpath, pathe.extname(subpath))

            // subpath found in package exports.
            if (subpath in exports) return true
          }

          return false
        },
        input,
        output,
        plugins
      }
    })
  })
}

/**
 * Create a plugin pack to bundle declaration files and fix `type` modifiers.
 *
 * @this {void}
 *
 * @param {Workspace} workspace
 *  The workspace metadata object
 * @return {Plugin[]}
 *  The plugin pack
 */
function dts(this: void, workspace: Workspace): Plugin[] {
  return [
    dtsBundle(),
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

              // re-exporting `Numeric` from `@flex-development/mark/core`
              // only to remove it is annoying, but unfortunately required
              // because `rollup-plugin-dts` does not know how to bundle types
              // only used in index signatures.
              if (
                output.facadeModuleId?.endsWith('dist/parse/index.d.mts') &&
                specifier === `${workspace.manifest.name}/core`
              ) {
                return match.replace('export {', 'import type {')
              }

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
      name: 'dts:fix-type-modifiers'
    }
  ]
}

/**
 * Create a plugin to remove stale build files.
 *
 * @this {void}
 *
 * @return {Plugin}
 *  The plugin
 */
function trash(this: void): Plugin {
  /**
   * The output bundle object.
   *
   * @var {OutputBundle} bundle
   */
  let bundle: OutputBundle = {}

  return {
    closeBundle: {
      /**
       * @async
       *
       * @this {PluginContext}
       *
       * @param {Error | undefined} [error]
       *  The bundle error
       * @return {Promise<undefined>}
       * @throws {Error}
       */
      async handler(
        this: PluginContext,
        error?: Error | undefined
      ): Promise<undefined> {
        if (error) throw error

        // remove already bundled files.
        for (const [, info] of Object.entries(bundle)) {
          if (info.type === 'chunk' && info.isEntry) {
            for (const id of info.moduleIds) {
              if (id !== info.facadeModuleId) await fs.rm(id, { force: true })
            }
          }
        }

        return void this
      },

      /**
       * The plugin hook execution order.
       */
      order: 'post'
    },

    /**
     * The plugin name.
     */
    name: 'trash',

    /**
     * @this {PluginContext}
     *
     * @param {NormalizedOutputOptions} options
     *  The normalized output options
     * @param {OutputBundle} outputs
     *  The output bundle object
     * @return {undefined}
     */
    writeBundle(
      this: PluginContext,
      options: NormalizedOutputOptions,
      outputs: OutputBundle
    ): undefined {
      return bundle = Object.assign({}, outputs), void bundle
    }
  }
}
