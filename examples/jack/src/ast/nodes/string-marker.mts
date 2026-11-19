/**
 * @file Nodes - StringMarker
 * @module examples/jack/ast/nodes/StringMarker
 */

import type {
  Data,
  Literal,
  SerializedStringMarker
} from '@flex-development/jack/ast'

/**
 * Info associated with string expression markers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface StringMarkerData extends Data {}

/**
 * A string expression marker.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface StringMarker extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode StringMarkerData}
   *
   * @override
   */
  data?: StringMarkerData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'stringMarker'

  /**
   * The serialized marker.
   *
   * @see {@linkcode SerializedStringMarker}
   *
   * @override
   */
  value: SerializedStringMarker
}

export type { StringMarker as default, StringMarkerData }
