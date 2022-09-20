import { degreesToRadians } from "./utils";

export function getKmDistanceFromCoordinates({
  latitude1,
  longitude1,
  latitude2,
  longitude2,
}: I2DCoordinates): number {
  latitude1 = degreesToRadians(latitude1);
  longitude1 = degreesToRadians(longitude1);
  latitude2 = degreesToRadians(latitude2);
  longitude2 = degreesToRadians(longitude2);
  return (
    Math.acos(
      Math.sin(latitude1) * Math.sin(latitude2) +
        Math.cos(latitude1) *
          Math.cos(latitude2) *
          Math.cos(longitude2 - longitude1)
    ) * 6371
  );
}
