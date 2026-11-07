/**
 * @file Interfaces - ContinuableConstruct
 * @module mark/parse/ContinuableConstruct
 */

import type { Construct, Exiter } from '@flex-development/mark/parse'

/**
 * A construct that can be continued.
 *
 * @see {@linkcode Construct}
 *
 * @extends {Construct}
 */
interface ContinuableConstruct extends Construct {
  /**
   * The continuation construct used to parse continued lines.
   *
   * @see {@linkcode Construct}
   *
   * @override
   */
  continuation: Construct

  /**
   * The final exit hook.
   *
   * @see {@linkcode Exiter}
   *
   * @override
   */
  exit: Exiter
}

export type { ContinuableConstruct as default }
