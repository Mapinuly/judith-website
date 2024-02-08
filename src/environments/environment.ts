// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { LngLat } from "mapbox-gl";

export const environment = {
  production: false,
  mapbox : {
    accessToken: 'pk.eyJ1IjoiZ29naXMiLCJhIjoiMTVjODAwYmIwNjkzYmVlMjU1YThkY2NmZDA5NGEzZTUifQ.n52cJfjcTtqXT5EWkMXgiQ',
    defaultLocation: new LngLat(34.9015797, 31.8409260),
    mapStyle : 'mapbox://styles/mapbox/satellite-v9'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
