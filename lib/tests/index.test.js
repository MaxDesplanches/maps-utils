"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test("test distance", () => {
    const location1 = {
        latitude1: 43.6206597,
        longitude1: 3.8553517,
    };
    const location2 = {
        latitude2: 43.6211969,
        longitude2: 3.8519288,
    };
    const distance = (0, src_1.distanceInKmBetweenEarthCoordinates)({
        ...location1,
        ...location2,
    });
    const expectedResult = 0.281;
    expect(distance).toBeGreaterThan(expectedResult);
});
//# sourceMappingURL=index.test.js.map