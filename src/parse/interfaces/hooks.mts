/**
 * @file Interfaces - Hooks
 * @module mark/parse/interfaces/Hooks
 */

import type {
  AfterConsume,
  AfterEnter,
  AfterExit,
  AfterRestore,
  AfterStore,
  BeforeConsume,
  BeforeEnter,
  BeforeExit,
  BeforeRestore,
  BeforeStore
} from '@flex-development/mark/parse'

/**
 * Lifecycle hooks.
 *
 * This interface can be augmented to register custom hooks.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface Hooks {
 *      onLineEnding?: OnLineEnding | null | undefined
 *    }
 *  }
 */
interface Hooks {
  /**
   * Do something after a character code is consumed.
   *
   * @see {@linkcode AfterConsume}
   */
  afterConsume?: AfterConsume | null | undefined

  /**
   * Do something after `enter`ing a token.
   *
   * @see {@linkcode AfterEnter}
   */
  afterEnter?: AfterEnter | null | undefined

  /**
   * Do something after `exit`ing a token.
   *
   * @see {@linkcode AfterExit}
   */
  afterExit?: AfterExit | null | undefined

  /**
   * Do something after restoring state.
   *
   * @see {@linkcode AfterRestore}
   */
  afterRestore?: AfterRestore | null | undefined

  /**
   * Do something after storing state.
   *
   * @see {@linkcode AfterStore}
   */
  afterStore?: AfterStore | null | undefined

  /**
   * Do something before a character code is consumed.
   *
   * @see {@linkcode BeforeConsume}
   */
  beforeConsume?: BeforeConsume | null | undefined

  /**
   * Do something before `enter`ing a token.
   *
   * @see {@linkcode BeforeEnter}
   */
  beforeEnter?: BeforeEnter | null | undefined

  /**
   * Do something before `exit`ing a token.
   *
   * @see {@linkcode BeforeExit}
   */
  beforeExit?: BeforeExit | null | undefined

  /**
   * Do something before restoring state.
   *
   * @see {@linkcode BeforeRestore}
   */
  beforeRestore?: BeforeRestore | null | undefined

  /**
   * Do something before storing state.
   *
   * @see {@linkcode BeforeStore}
   */
  beforeStore?: BeforeStore | null | undefined
}

export type { Hooks as default }
