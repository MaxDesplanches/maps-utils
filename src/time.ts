import { getDistanceFromCoordinates } from "./distance";
import { I2DCoordinates } from "./interface";

export enum Transportation {
  WALK = "walk",
  BUS = "bus",
  TRAM = "tram",
  METRO = "metro",
}

/**
 *
 * @param {number} distance in kilometers
 * @param {Transportation} speed speed in km/h
 * @returns {number} time in minutes
 */
function getTime(distance: number, speed: number): number {
  const timeInHours: number = distance / speed;
  const timeInMinutes: number = timeInHours * 60;
  return timeInMinutes;
}

/**
 *
 * @param {number} distance in kilometers
 * @param {Transportation} transportation transportation system
 * @returns {number} time in minutes
 */
export function getTimeInMnFromKm(
  distance: number,
  transportation: Transportation = Transportation.WALK
): number {
  switch (transportation) {
    case Transportation.WALK:
      return getTime(distance, 6);
    case Transportation.BUS:
      return getTime(distance, 15);
    case Transportation.TRAM:
      return getTime(distance, 25);
    case Transportation.METRO:
      return getTime(distance, 60);
  }
}
/**
 *
 * @param {I2DCoordinates} coordinates
 * @param {Transportation} transportation transportation system
 * @returns {number} time in minutes
 */
export function getTimeInMnFromCoordinates(
  coordinates: I2DCoordinates,
  transportation: Transportation = Transportation.WALK
): number {
  const distance = getDistanceFromCoordinates(coordinates);
  return getTimeInMnFromKm(distance, transportation);
}
