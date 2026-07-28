/**
 * @file Type Aliases - ApplySkip
 * @module mark/parse/types/ApplySkip
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * Move `place` a bit forward.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @param {Code | false | undefined} [code]
 *  The character code being consumed, if any,
 *  or `false` if the skip is being applied during state restoration
 * @return {undefined}
 */
type ApplySkip = (this: void, code?: Code | false | undefined) => undefined

export type { ApplySkip as default }
