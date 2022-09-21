import { I2DCoordinates } from "./interface";
import { degreesToRadians } from "./utils";

/**
 *
 * @param {I2DCoordinates} coordinates
 * @returns {number} distance in kilometers
 */
export function getDistanceFromCoordinates(
  coordinates: I2DCoordinates
): number {
  const lat1 = degreesToRadians(coordinates.latitude1);
  const long1 = degreesToRadians(coordinates.longitude1);
  const lat2 = degreesToRadians(coordinates.latitude2);
  const long2 = degreesToRadians(coordinates.longitude2);
  return (
    Math.acos(
      Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1)
    ) * 6371
  );
}
