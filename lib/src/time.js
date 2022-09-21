"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeInMnFromCoordinates = exports.getTimeInMnFromKm = exports.Transportation = void 0;
const distance_1 = require("./distance");
var Transportation;
(function (Transportation) {
    Transportation["WALK"] = "walk";
    Transportation["BUS"] = "bus";
    Transportation["TRAM"] = "tram";
    Transportation["METRO"] = "metro";
})(Transportation = exports.Transportation || (exports.Transportation = {}));
function getTime(distance, speed) {
    const timeInHours = distance / speed;
    const timeInMinutes = timeInHours * 60;
    return timeInMinutes;
}
function getTimeInMnFromKm(distance, transportation = Transportation.WALK) {
    switch (transportation) {
        case Transportation.WALK:
            return getTime(distance, 6);
        case Transportation.BUS:
            return getTime(distance, 15);
        case Transportation.TRAM:
            return getTime(distance, 25);
        case Transportation.METRO:
            return getTime(distance, 60);
    }
}
exports.getTimeInMnFromKm = getTimeInMnFromKm;
function getTimeInMnFromCoordinates(coordinates, transportation = Transportation.WALK) {
    const distance = (0, distance_1.getDistanceFromCoordinates)(coordinates);
    return getTimeInMnFromKm(distance, transportation);
}
exports.getTimeInMnFromCoordinates = getTimeInMnFromCoordinates;
