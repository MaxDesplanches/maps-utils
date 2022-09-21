"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radiansToDegrees = exports.degreesToRadians = void 0;
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
exports.degreesToRadians = degreesToRadians;
function radiansToDegrees(radians) {
    return (radians * 180) / Math.PI;
}
exports.radiansToDegrees = radiansToDegrees;
