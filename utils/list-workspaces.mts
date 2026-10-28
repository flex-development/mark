/**
 * @file Utilities - listWorkspaces
 * @module utils/listWorkspaces
 */

import { readPackageJson } from '@flex-development/mlly'
import pathe from '@flex-development/pathe'
import type { PackageJson } from '@flex-development/pkg-types'
import { ok } from 'devlop'
import fs, { type Dirent } from 'node:fs'
import toposort from 'toposort'

export { listWorkspaces as default, type Workspace }

/**
 * Read the `packages` directory.
 *
 * @see {@linkcode Dirent}
 *
 * @this {void}
 *
 * @return {ReadonlyArray<Workspace>}
 *  The list of workspace metadata objects
 */
function listWorkspaces(this: void): readonly Workspace[] {
  /**
   * The list of workspace directories.
   *
   * @const {Dirent[]} directories
   */
  const directories: Dirent[] = fs
    .readdirSync('packages', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())

  /**
   * Map where each key is a workspace name
   * and each value is a workspace metadata object.
   *
   * @const {Map<string, Workspace>} map
   */
  const map: Map<string, Workspace> = new Map<string, Workspace>()

  // build the workspaces map.
  for (const workspace of directories) {
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

  return toposort.array([...map.keys()], edges).map(name => map.get(name)!)
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
