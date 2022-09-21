import { I2DCoordinates } from "./interface";
import { degreesToRadians, radiansToDegrees } from "./utils";

/**
 *
 * @param {I2DCoordinates} coordinates
 * @returns {number} angle in degree
 */
export function getDegreeAngleFromCoordinates(coordinates: I2DCoordinates) {
  const lat1 = degreesToRadians(coordinates.latitude1);
  const long1 = degreesToRadians(coordinates.longitude1);
  const lat2 = degreesToRadians(coordinates.latitude2);
  const long2 = degreesToRadians(coordinates.longitude2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(long2 - long1);
  const y = Math.sin(long2 - long1) * Math.cos(lat2);
  return radiansToDegrees(Math.atan2(x, y));
}
