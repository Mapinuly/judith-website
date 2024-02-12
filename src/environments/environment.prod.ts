import { LngLat } from 'mapbox-gl'; // Import the LngLat class from mapbox-gl library

export const environment = {
  production: true,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZ29naXMiLCJhIjoiMTVjODAwYmIwNjkzYmVlMjU1YThkY2NmZDA5NGEzZTUifQ.n52cJfjcTtqXT5EWkMXgiQ',
    defaultLocation: new LngLat(34.9015797, 31.8409260),
    mapStyle: 'mapbox://styles/mapbox/satellite-v9'
  }
};

