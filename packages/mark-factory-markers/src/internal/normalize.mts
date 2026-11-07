/**
 * @file Utilities - normalize
 * @module mark-factory-markers/utils/normalize
 */

import type {
  CodeCheck,
  Marker,
  MarkerInfo
} from '@flex-development/mark/parse'

/**
 * Normalize a marker configuration.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {CodeCheck | Marker | MarkerInfo} marker
 *  The marker matcher, info object, or code
 * @return {MarkerInfo}
 *  The marker info object
 */
function normalize(
  this: void,
  marker: CodeCheck | Marker | MarkerInfo
): MarkerInfo {
  return typeof marker === 'object' ? marker : { code: marker }
}

export default normalize
