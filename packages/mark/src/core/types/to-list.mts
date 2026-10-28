/**
 * @file Type Aliases - ToList
 * @module mark/core/types/ToList
 */

import type { IfNever, List } from '@flex-development/mark/core'

/**
 * Convert `T` to a list.
 *
 * @template {any} T
 *  The value to convert
 */

type ToList<T> = IfNever<
  T,
  [],
  // dprint-ignore start
  0 extends T & 1
    ? T[]
    : [T] extends [never]
      ? []
      : T extends List
        ? T extends ReadonlySet<infer U>
          ? U[]
          : T
        : T[] // dprint-ignore end
>

export type { ToList as default }
