"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test("test time (walk)", () => {
    const distance = (0, src_1.getTimeInMnFromKm)(5, src_1.Transportation.WALK);
    const expectedResult = 50;
    expect(distance).toBe(expectedResult);
});
