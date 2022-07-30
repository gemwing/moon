// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl : "http://209.126.10.42/moonsea/api/",
  // apiUrl:'http://codetentacles-006-site36.htempurl.com/api/',
  // apiUrl:'https://207.244.245.15/moonsea/api/',
  apiUrl:'https://moonsea.io/moonsea/api/',
  defaultProfilePic : "img/profile.png",
  // configFile : 'testnet',
  configFile : 'mainnet',
  bscTestnetScan:"https://testnet.bscscan.com/tx/",
  paginationSize :12,
  tockenUri:'https://moonsea.io/moonsea/api/api/Metadata/'
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
