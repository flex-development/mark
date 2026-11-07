/**
 * @file Internal - fixLineEnding
 * @module mark-util-subtokenize/internal/fixLineEnding
 */

import { eol } from '@flex-development/mark-util-character'
import { codes } from '@flex-development/mark-util-symbol'
import type {
  Chunk,
  SliceStream,
  Token
} from '@flex-development/mark/parse'

/**
 * Fix the position of a line ending.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {SliceStream} sliceStream
 *  Get the chunks spanning `token`
 * @param {Token} token
 *  The line ending token
 * @return {undefined}
 */
function fixLineEnding(
  this: void,
  sliceStream: SliceStream,
  token: Token
): undefined {
  // fix end point.
  // tokens representing line endings should end at column `1`,
  // but may not when the token is closed after `defineSkip` is called
  // and a skip is applied.
  if (token.end.column !== 1) {
    /**
     * The chunks spanning the current token.
     *
     * @const {Chunk[]} stream
     */
    const stream: Chunk[] = sliceStream(token)

    // eol tokens end at column `1`.
    // the offset of eol tokens depends on the actual eol code.
    if (stream.length === 1 && eol(stream[0])) {
      token.end.column = 1
      token.end.offset = token.start.offset
      token.end.offset += stream[0] === codes.carriageReturnLineFeed ? 2 : 1
    }
  }

  return void token
}

export default fixLineEnding
