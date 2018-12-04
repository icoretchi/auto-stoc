// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000',
  firebase: {
    apiKey: '',
    authDomain: 'auto-stoc-1234.firebaseapp.com',
    databaseURL: 'https://auto-stoc-1234.firebaseio.com',
    projectId: 'auto-stoc-1234',
    storageBucket: 'auto-stoc-1234.appspot.com',
    messagingSenderId: '772082306052',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
