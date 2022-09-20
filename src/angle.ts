import { degreesToRadians, radiansToDegrees } from "./utils";

export function getDegreeAngleFromCoordinates({
  latitude1,
  longitude1,
  latitude2,
  longitude2,
}: I2DCoordinates) {
  const lat1 = degreesToRadians(latitude1);
  const long1 = degreesToRadians(longitude1);
  const lat2 = degreesToRadians(latitude2);
  const long2 = degreesToRadians(longitude2);
  //  latitude1 = 48.88055391;
  //  longitude1 = 2.28308034;
  //  latitude2 = 2.28369043;
  //  longitude2 = degreesToRadians(longitude2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(long2 - long1);
  const y = Math.sin(long2 - long1) * Math.cos(lat2);
  return radiansToDegrees(Math.atan2(x, y));
}
