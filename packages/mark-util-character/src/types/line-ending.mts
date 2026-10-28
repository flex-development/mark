/**
 * @file Type Aliases - LineEnding
 * @module mark-util-character/types/LineEnding
 */

import type { codes } from '@flex-development/mark-util-symbol'

/**
 * Union of codes representing a line ending.
 *
 * @see {@linkcode codes.carriageReturn}
 * @see {@linkcode codes.carriageReturnLineFeed}
 * @see {@linkcode codes.crlf}
 * @see {@linkcode codes.cr}
 * @see {@linkcode codes.lf}
 * @see {@linkcode codes.lineFeed}
 * @see {@linkcode codes.ls}
 * @see {@linkcode codes.ps}
 * @see {@linkcode codes.vcr}
 * @see {@linkcode codes.vlf}
 */
type LineEnding =
  | typeof codes.carriageReturn
  | typeof codes.carriageReturnLineFeed
  | typeof codes.cr
  | typeof codes.crlf
  | typeof codes.lf
  | typeof codes.lineFeed
  | typeof codes.ls
  | typeof codes.ps
  | typeof codes.vcr
  | typeof codes.vlf

export type { LineEnding as default }
