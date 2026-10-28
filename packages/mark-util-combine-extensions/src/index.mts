/**
 * @file combineExtensions
 * @module mark-util-combine-extensions
 */

import { splice } from '@flex-development/mark-util-chunked'
import type { List } from '@flex-development/mark/core'
import type {
  Extension,
  NormalizedExtension
} from '@flex-development/mark/parse'
import { ok } from 'devlop'
import list from './internal/list.mts'
import merge from './internal/merge.mts'

export { combineExtensions, combineExtensions as default }

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode AnyExtension}
 * @see {@linkcode AnyNormalizedExtension}
 * @see {@linkcode List}
 *
 * @template {AnyNormalizedExtension} T
 *  The combined extension
 *
 * @param {AnyExtension | List<AnyExtension> | null | undefined} extensions
 *  The extension to copy or the list of extensions to combine
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends AnyNormalizedExtension>(
  extensions: AnyExtension | List<AnyExtension> | null | undefined
): T

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode AnyExtension}
 * @see {@linkcode AnyNormalizedExtension}
 * @see {@linkcode List}
 *
 * @template {AnyNormalizedExtension} T
 *  The combined extension
 *
 * @param {(AnyExtension | List<AnyExtension> | null | undefined)[]} extensions
 *  The extensions to combine
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends AnyNormalizedExtension>(
  ...extensions: (AnyExtension | List<AnyExtension> | null | undefined)[]
): T

/**
 * Combine multiple extensions into one.
 *
 * @see {@linkcode AnyExtension}
 * @see {@linkcode AnyNormalizedExtension}
 * @see {@linkcode List}
 *
 * @template {AnyNormalizedExtension} T
 *  The combined extension
 *
 * @param {AnyExtension | List<AnyExtension> | null | undefined} extensions
 *  The extension or list of extensions
 * @param {(AnyExtension | List<AnyExtension> | null | undefined)[]} sources
 *  The extensions to combine
 * @return {T}
 *  The combined extension
 */
function combineExtensions<T extends AnyNormalizedExtension>(
  extensions: AnyExtension | List<AnyExtension> | null | undefined,
  ...sources: (AnyExtension | List<AnyExtension> | null | undefined)[]
): T {
  /**
   * The combined extension.
   *
   * @const {NormalizedExtension} all
   */
  const all: NormalizedExtension = {}

  /**
   * The index of the current extension.
   *
   * @var {number} index
   */
  let index: number = -1

  // normalize the list of syntax extensions.
  extensions = [extensions, ...sources].filter(s => !!s).flatMap(list)

  // merge extensions into `all`.
  while (++index < extensions.length) {
    /**
     * The current extension.
     *
     * @const {Extension | undefined} extension
     */
    const extension: Extension | undefined = (extensions as Extension[])[index]

    /**
     * The current hook name.
     *
     * @var {keyof Extension} hook
     */
    let hook: keyof Extension

    ok(extension, 'expected `extension`')

    for (hook in extension) {
      // merge `settings` fields as objects.
      if (hook === 'settings') {
        all[hook] = merge(all[hook], extension[hook])
        continue
      }

      /**
       * The field value of the combined extension.
       *
       * @const {Record<string, any> | undefined} maybe
       */
      const maybe: Record<string, any> | undefined =
        Object.hasOwnProperty.call(all, hook) ? all[hook] : undefined

      /**
       * The current top-level extension field value.
       *
       * @const {Record<string, any>} left
       */
      const left: Record<string, any> = maybe ?? (all[hook] = {})

      /**
       * The incoming top-level extension field value.
       *
       * @const {Record<string, any> | null | undefined} right
       */
      const right: Record<string, any> | null | undefined = extension[hook]

      if (right) {
        /**
         * The current extension field key.
         *
         * @var {string} key
         */
        let key: string

        for (key in right) {
          if (!Object.hasOwnProperty.call(left, key)) left[key] = []
          lists(list(left[key]), list(right[key] ?? []))
        }
      }
    }
  }

  return all as T
}

/**
 * A supported extension.
 */
type AnyExtension = Pick<Extension, 'disable'>

/**
 * A supported extension that has been normalized.
 */
type AnyNormalizedExtension = Pick<NormalizedExtension, 'disable'>

/**
 * Merge `list` into `existing` (both lists of constructs, partial constructs,
 * or character codes).
 *
 * > 👉 **Note**: Mutates `existing`.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {unknown[]} existing
 *  The list to merge into
 * @param {unknown[]} list
 *  The list to merge
 * @return {undefined}
 */
function lists(
  this: void,
  existing: unknown[],
  list: unknown[]
): undefined {
  /**
   * The items to inject into the existing list.
   *
   * @const {unknown[]} before
   */
  const before: unknown[] = []

  /**
   * The current index in the merge list.
   *
   * @var {number} index
   */
  let index: number = -1

  while (++index < list.length) { // @ts-expect-error might be a construct.
    ;(list[index]!.add === 'after' ? existing : before).push(list[index])
  }

  return void splice(existing, 0, 0, before)
}
