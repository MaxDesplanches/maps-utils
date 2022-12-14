<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MaxDesplanches/maps-utils">
    <img src="https://www.bim-immersion.com/Map_making_conventions_logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Maps Utils</h3>

  <p align="center">
        A package to have maps utils to calculate distance and angle between coordinates, or time for traveling (on distance as the crow flies for now)
    <br />
    <br />
    <a href="https://github.com/MaxDesplanches/maps-utils/issues">Report Bug</a>
    ·
    <a href="https://github.com/MaxDesplanches/maps-utils/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

The goal of this project is to provide utils for your maps calculation as distance, angle, time.

<!-- GETTING STARTED -->

## Getting Started

### Installation

Install NPM packages:

```sh
npm install @maxdesplanches/maps-utils
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage (NodeJS, TypeScript below)

```javascript
const mapsUtils = require("@maxdesplanches/maps-utils");

const location1 = {
  latitude1: 43.6206597,
  longitude1: 3.8553517,
};

const location2 = {
  latitude2: 43.6211969,
  longitude2: 3.8519288,
};

const coordinates = {
  ...location1,
  ...location2,
};

const distanceInKm = mapsUtils.getDistanceFromCoordinates(coordinates);

const angleInDegree = mapsUtils.getDegreeAngleFromCoordinates(coordinates);

const transportation = mapsUtils.Transportation.BUS;

const timeInMn1 = mapsUtils.getTimeInMnFromKm(distance, transportation);

const timeInMn2 = mapsUtils.getTimeInMnFromCoordinates(
  coordinates,
  transportation
);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage (Typescript)

```javascript
import {
  getTimeInMnFromKm,
  getDegreeAngleFromCoordinates,
  getDistanceFromCoordinates,
  getTimeInMnFromCoordinates,
  Transportation,
} from "@maxdesplanches/maps-utils";

const location1 = {
  latitude1: 43.6206597,
  longitude1: 3.8553517,
};

const location2 = {
  latitude2: 43.6211969,
  longitude2: 3.8519288,
};

const coordinates = {
  ...location1,
  ...location2,
};

const distanceInKm = getDistanceFromCoordinates(coordinates);

const angleInDegree = getDegreeAngleFromCoordinates(coordinates);

const transportation = Transportation.BUS;

const timeInMn1 = getTimeInMnFromKm(distance, transportation);

const timeInMn2 = getTimeInMnFromCoordinates(coordinates, transportation);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- RESSOURCES -->

## Ressources

http://www.movable-type.co.uk/scripts/latlong.html
https://www.calculatorsoup.com/calculators/math/speed-distance-time-calculator.php

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Max Desplanches - [@Max_Desplanches](https://twitter.com/Max_Desplanches) - max.desplanches@gmail.com

Project Link: [https://github.com/MaxDesplanches/maps-utils](https://github.com/MaxDesplanches/maps-utils)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
