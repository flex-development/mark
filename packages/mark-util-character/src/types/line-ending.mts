/**
 * @file Type Aliases - LineEnding
 * @module mark-util-character/types/LineEnding
 */

import type { codes } from '@flex-development/mark-util-symbol'

/**
 * Union of codes representing a line ending.
 *
 * @see {@linkcode codes.carriageReturnLineFeed}
 * @see {@linkcode codes.carriageReturn}
 * @see {@linkcode codes.cr}
 * @see {@linkcode codes.lf}
 * @see {@linkcode codes.lineFeed}
 * @see {@linkcode codes.ls}
 * @see {@linkcode codes.ps}
 */
type LineEnding =
  | typeof codes.carriageReturn
  | typeof codes.carriageReturnLineFeed
  | typeof codes.cr
  | typeof codes.lf
  | typeof codes.lineFeed
  | typeof codes.ls
  | typeof codes.ps

export type { LineEnding as default }
