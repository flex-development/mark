/**
 * @file Type Aliases - IfNever
 * @module mark/core/types/IfNever
 */

import type { IsNever } from '@flex-development/mark/core'

/**
 * Get type `T` if `U` is never, or type `F` is `U` is not never.
 *
 * @see {@linkcode IsNever}
 *
 * @example
 *  type X = IfNever<never, 1, 0> // 1
 * @example
 *  type X = IfNever<any, 1, 0> // 0
 * @example
 *  type X = IfNever<unknown, 1, 0> // 0
 * @example
 *  type X = IfNever<{ hello: string; world: string }, 1, 0> // 0
 *
 * @template {any} U
 *  The type to evaluate
 * @template {any} T
 *  The type if `U` is `never`
 * @template {any} F
 *  The type if `U` is not `never`
 */
type IfNever<U, T, F> = IsNever<U> extends true ? T : F

export type { IfNever as default }
