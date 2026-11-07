/**
 * @file Utilities - workspaces
 * @module utils/workspaces
 */

import { readPackageJson } from '@flex-development/mlly'
import pathe from '@flex-development/pathe'
import type { PackageJson } from '@flex-development/pkg-types'
import { ok } from 'devlop'
import fs, { type Dirent } from 'node:fs'
import toposort from 'toposort'

export { listPackages as default, listExamples, listPackages, type Workspace }

/**
 * Read the `examples` directory.
 *
 * @see {@linkcode Options}
 * @see {@linkcode Workspace}
 *
 * @this {void}
 *
 * @param {Options | null | undefined} [options]
 *  Options for listing
 * @return {ReadonlyArray<Workspace>}
 *  The list of workspace metadata objects
 */
function listExamples(
  this: void,
  options?: Options | null | undefined
): readonly Workspace[] {
  return list('examples', options)
}

/**
 * Read the `packages` directory.
 *
 * @see {@linkcode Options}
 * @see {@linkcode Workspace}
 *
 * @this {void}
 *
 * @param {Options | null | undefined} [options]
 *  Options for listing
 * @return {ReadonlyArray<Workspace>}
 *  The list of workspace metadata objects
 */
function listPackages(
  this: void,
  options?: Options | null | undefined
): readonly Workspace[] {
  return list('packages', options)
}

/**
 * Read a `directory`.
 *
 * @see {@linkcode Options}
 * @see {@linkcode Workspace}
 *
 * @this {void}
 *
 * @param {string} directory
 *  The path to the directory to read, relative to `process.env.CWD`
 * @param {Options | null | undefined} [options]
 *  Options for listing
 * @return {ReadonlyArray<Workspace>}
 *  The list of workspace metadata objects
 */
function list(
  this: void,
  directory: string,
  options?: Options | null | undefined
): readonly Workspace[] {
  /**
   * The directory content list.
   *
   * @const {Dirent[]} list
   */
  const list: Dirent[] = fs.readdirSync(directory, { withFileTypes: true })

  return workspaces(list.filter(dirent => dirent.isDirectory()), options)
}

/**
 * Convert a list of directory metadata objects to workspace metadata objects.
 *
 * @see {@linkcode Dirent}
 *
 * @this {void}
 *
 * @param {ReadonlyArray<Dirent>} list
 *  The directory metadata object list
 * @param {Options | null | undefined} [options]
 *  The list conversion options
 * @return {ReadonlyArray<Workspace>}
 *  The list of workspace metadata objects
 */
function workspaces(
  this: void,
  list: readonly Dirent[],
  options?: Options | null | undefined
): readonly Workspace[] {
  /**
   * Map where each key is a workspace name
   * and each value is a workspace metadata object.
   *
   * @const {Map<string, Workspace>} map
   */
  const map: Map<string, Workspace> = new Map<string, Workspace>()

  // build the workspaces map.
  for (const workspace of list) {
    /**
     * The relative path to the workspace root.
     *
     * @const {string} path
     */
    const path: string = pathe.join(workspace.parentPath, workspace.name)

    /**
     * The workspace directory URL.
     *
     * @const {URL} url
     */
    const url: URL = pathe.pathToFileURL(path + pathe.sep)

    /**
     * The package manifest object.
     *
     * @const {PackageJson | null} manifest
     */
    const manifest: PackageJson | null = readPackageJson(url, import.meta.url)

    ok(manifest, 'expected package `manifest`')
    ok(manifest.name, 'expected package manifest `name`')

    // map workspace names to their workspaces for quick lookup.
    map.set(manifest.name, {
      url, // eslint-disable-next-line sort-keys
      name: workspace.name,
      parentPath: workspace.parentPath, // eslint-disable-next-line sort-keys
      manifest
    })
  }

  // sort list topologically.
  if (options?.topological) {
    /**
     * The edges of the dependency graph.
     *
     * @const {[string, string][]} edges
     */
    const edges: [string, string][] = []

    // build the dependency graph edges.
    for (const [, workspace] of map) {
      for (const dep of Object.keys(workspace.manifest.dependencies ?? {})) {
        ok(workspace.manifest.name, 'expected package manifest `name`')

        // only create edges for internal workspace dependencies.
        // toposort expects [dep, manifest.name] for dependency-first ordering.
        if (map.has(dep)) edges.push([dep, workspace.manifest.name])
      }
    }

    // sort by dependency requirements.
    return toposort.array([...map.keys()], edges).map(name => map.get(name)!)
  }

  // sort list alphabetically by package name.
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name))
}

/**
 * Options for listing workspaces.
 */
type Options = {
  /**
   * Whether to sort the list of workspaces topologically.
   */
  topological?: boolean | null | undefined
}

/**
 * A workspace metadata object.
 */
type Workspace = {
  /**
   * The workspace manifest.
   *
   * @see {@linkcode PackageJson}
   */
  manifest: PackageJson

  /**
   * The unscoped workspace name.
   */
  name: string

  /**
   * The relative path to the parent directory.
   */
  parentPath: string

  /**
   * The URL of the workspace directory.
   */
  url: URL
}
