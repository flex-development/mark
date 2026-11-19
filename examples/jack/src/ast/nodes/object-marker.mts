/**
 * @file Nodes - ObjectMarker
 * @module examples/jack/ast/nodes/ObjectMarker
 */

import type { Data, Node } from '@flex-development/jack/ast'

/**
 * Info associated with object expression markers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ObjectMarkerData extends Data {}

/**
 * An object expression marker.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface ObjectMarker extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectMarkerData}
   *
   * @override
   */
  data?: ObjectMarkerData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'objectMarker'
}

export type { ObjectMarker as default, ObjectMarkerData }
