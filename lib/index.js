"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceInKmBetweenEarthCoordinates = void 0;
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
function distanceInKmBetweenEarthCoordinates({ latitude1, longitude1, latitude2, longitude2, }) {
    latitude1 = degreesToRadians(latitude1);
    longitude1 = degreesToRadians(longitude1);
    latitude2 = degreesToRadians(latitude2);
    longitude2 = degreesToRadians(longitude2);
    return (Math.acos(Math.sin(latitude1) * Math.sin(latitude2) +
        Math.cos(latitude1) *
            Math.cos(latitude2) *
            Math.cos(longitude2 - longitude1)) * 6371);
}
exports.distanceInKmBetweenEarthCoordinates = distanceInKmBetweenEarthCoordinates;
//# sourceMappingURL=index.js.map