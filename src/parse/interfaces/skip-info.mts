/**
 * @file Interfaces - SkipInfo
 * @module mark/parse/interfaces/SkipInfo
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * Info related to skipping.
 */
interface SkipInfo {
  /**
   * The character code being consumed, if any.
   *
   * @see {@linkcode Code}
   */
  code?: Code | undefined

  /**
   * Whether the skip is being applied during state restoration.
   */
  restore?: boolean | null | undefined
}

export type { SkipInfo as default }
