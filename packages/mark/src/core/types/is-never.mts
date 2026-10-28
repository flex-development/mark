/**
 * @file Type Aliases - IsNever
 * @module mark/core/types/IsNever
 */

/**
 * Check if `T` is `never`.
 *
 * @example
 *  type X = IsNever<never> // true
 * @example
 *  type X = IsNever<any> // false
 * @example
 *  type X = IsNever<string> // false
 * @example
 *  type X = IsNever<unknown> // false
 *
 * @template {any} T
 *  The type to check
 */
type IsNever<T> = [T] extends [never] ? true : false

export type { IsNever as default }
