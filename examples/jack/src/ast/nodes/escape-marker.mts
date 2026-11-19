/**
 * @file Nodes - EscapeMarker
 * @module examples/jack/ast/nodes/EscapeMarker
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with escape sequence markers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface EscapeMarkerData extends Data {}

/**
 * An escape sequence marker.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface EscapeMarker extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode EscapeMarkerData}
   *
   * @override
   */
  data?: EscapeMarkerData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'escapeMarker'
}

export type { EscapeMarker as default, EscapeMarkerData }
