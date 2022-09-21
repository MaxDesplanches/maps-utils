"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDegreeAngleFromCoordinates = void 0;
const utils_1 = require("./utils");
function getDegreeAngleFromCoordinates(coordinates) {
    const lat1 = (0, utils_1.degreesToRadians)(coordinates.latitude1);
    const long1 = (0, utils_1.degreesToRadians)(coordinates.longitude1);
    const lat2 = (0, utils_1.degreesToRadians)(coordinates.latitude2);
    const long2 = (0, utils_1.degreesToRadians)(coordinates.longitude2);
    const x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(long2 - long1);
    const y = Math.sin(long2 - long1) * Math.cos(lat2);
    return (0, utils_1.radiansToDegrees)(Math.atan2(x, y));
}
exports.getDegreeAngleFromCoordinates = getDegreeAngleFromCoordinates;
