import { I2DCoordinates } from "./interface";
export declare enum Transportation {
    WALK = "walk",
    BUS = "bus",
    TRAM = "tram",
    METRO = "metro"
}
export declare function getTimeInMnFromKm(distance: number, transportation?: Transportation): number;
export declare function getTimeInMnFromCoordinates(coordinates: I2DCoordinates, transportation?: Transportation): number;
