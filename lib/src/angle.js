"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angleFromCoordinates = void 0;
const utils_1 = require("./utils");
function angleFromCoordinates({ latitude1, longitude1, latitude2, longitude2, }) {
    const lat1 = (0, utils_1.degreesToRadians)(latitude1);
    const long1 = (0, utils_1.degreesToRadians)(longitude1);
    const lat2 = (0, utils_1.degreesToRadians)(latitude2);
    const long2 = (0, utils_1.degreesToRadians)(longitude2);
    const x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(long2 - long1);
    const y = Math.sin(long2 - long1) * Math.cos(lat2);
    return (0, utils_1.radiansToDegrees)(Math.atan2(x, y));
}
exports.angleFromCoordinates = angleFromCoordinates;
//# sourceMappingURL=angle.js.map