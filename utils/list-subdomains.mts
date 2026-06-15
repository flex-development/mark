/**
 * @file Utilities - listSubdomains
 * @module utils/listSubdomains
 */

import fs, { type Dirent } from 'node:fs'

/**
 * Read the `src` directory.
 *
 * @see {@linkcode Dirent}
 *
 * @this {void}
 *
 * @return {ReadonlyArray<Dirent>}
 *  The list of subdomain directory entries
 */
function listSubdomains(this: void): readonly Dirent[] {
  return fs.readdirSync('src', { withFileTypes: true }).filter(dirent => {
    return dirent.isDirectory()
  })
}

export default listSubdomains
