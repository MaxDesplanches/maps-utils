import { getTimeInMnFromKm, Transportation } from "../src";

test("test time (walk)", () => {
  const distance = getTimeInMnFromKm(5, Transportation.WALK);

  const expectedResult = 50;

  expect(distance).toBe(expectedResult);
});
