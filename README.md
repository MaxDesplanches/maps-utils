<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">

  </a>

  <h3 align="center">Maps Utils</h3>

  <p align="center">
    An package to calculate distance with Haversine formula.
    <br />

</div>

<!-- ABOUT THE PROJECT -->

## About The Project

I needed a method to have distance between 2 coordinates, with Haversine formula:
http://www.movable-type.co.uk/scripts/latlong.html

<!-- GETTING STARTED -->

## Getting Started

### Installation

Install NPM packages:

```sh
npm install @MaxDesplanches/maps-utils
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

```javascript
const maps = require("@MaxDesplanches/maps-utils");

const location1 = {
  latitude1: 43.6206597,
  longitude1: 3.8553517,
};

const location2 = {
  latitude2: 43.6211969,
  longitude2: 3.8519288,
};

const distanceInKm = maps.distanceInKmBetweenEarthCoordinates({
  ...location1,
  ...location2,
});
```

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
