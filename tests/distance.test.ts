import { getDistanceFromCoordinates } from "../src";

test("test distance", () => {
  const location1 = {
    latitude1: 43.6206597,
    longitude1: 3.8553517,
  };

  const location2 = {
    latitude2: 43.6211969,
    longitude2: 3.8519288,
  };

  const distance = getDistanceFromCoordinates({
    ...location1,
    ...location2,
  });

  // 281 meters
  const expectedResult = 0.281;

  expect(distance).toBeGreaterThan(expectedResult);
});
