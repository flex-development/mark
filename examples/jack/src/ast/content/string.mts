/**
 * @file Content - string
 * @module examples/jack/ast/content/string
 */

import type {
  CharacterEscape,
  HexEscape,
  NulEscape,
  UnicodeEscape,
  Whitespace
} from '@flex-development/jack/ast'
import * as mdast from 'mdast'

/**
 * Union of registered jack nodes that can occur where string expression content
 * is expected.
 *
 * To register custom nodes, augment {@linkcode StringContentMap}.\
 * They will be added to this union automatically.
 */
type StringContent = StringContentMap[keyof StringContentMap]

/**
 * Registry of nodes that can occur where {@linkcode StringContent} is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/jack/ast' {
 *    interface StringContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @see {@linkcode mdast.PhrasingContentMap}
 *
 * @extends {mdast.PhrasingContentMap}
 */
interface StringContentMap extends mdast.PhrasingContentMap {
  characterEscape: CharacterEscape
  commentLinePrefix: never
  hexEscape: HexEscape
  inlineTag: never
  nulEscape: NulEscape
  unicodeEscape: UnicodeEscape
  whitespace: Whitespace
}

export type { StringContent, StringContentMap }
