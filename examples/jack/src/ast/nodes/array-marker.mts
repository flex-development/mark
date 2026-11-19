/**
 * @file Nodes - ArrayMarker
 * @module examples/jack/ast/nodes/ArrayMarker
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with array expression markers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrayMarkerData extends Data {}

/**
 * An array expression marker.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface ArrayMarker extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayMarkerData}
   *
   * @override
   */
  data?: ArrayMarkerData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'arrayMarker'
}

export type { ArrayMarkerData, ArrayMarker as default }
