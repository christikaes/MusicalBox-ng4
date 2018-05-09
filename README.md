## THIS REPO IS OUTDATED! Please see MusicalBox for ng6

# MusicalBox

This is a simple Angular Project game called MusicalBox. 

There are 3 parts to this application, the PWA, Material Design and Firebase. 
For each part you can checkout the branches `no-*` to see what the code looked like before adding these in.

## Progressive Web Apps

### Service Worker
Install the dependencies:
```
npm install --save @angular/service-Worker
```
!Temporary bug: https://github.com/angular/angular-cli/issues/6990
`"@angular/cli": "1.0.3"`

Add servie worker to your .angular-cli.json:
```
"apps": [
    {
        ...
        "serviceWorker": true,
        ...
```

You can checkout branch `pwa-1`

### Manifest file
Create a `manifest.json` file and save it in your assets folder.
You can use a generator such as: https://app-manifest.firebaseapp.com/

Add this to your `index.html`
`<link rel="manifest" href="assets/manifest.json">`

You can checkout branch `pwa-2`


## Angular Material

## Setup Angular Material

Install the dependencies:
```
npm install --save @angular/material @angular/cdk @angular/animations
```

Include the modules in your app:
```
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

@NgModule({
  ...
  imports: [
      MaterialModule,
      BrowserAnimationsModule,
      ...
  ],
  ...
})
```

## Add a theme

Include a theme. Add this a new file theme.scss:
```
@import '~@angular/material/theming';
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue.
$candy-app-primary: mat-palette($mat-indigo);
$candy-app-accent:  mat-palette($mat-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$candy-app-warn:    mat-palette($mat-red);

// Create the theme object (a Sass map containing all of the palettes).
$candy-app-theme: mat-dark-theme($candy-app-primary, $candy-app-accent, $candy-app-warn);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($candy-app-theme);
```
Make sure to include this new thme in your .angular-cli:
```
...
"styles": [
    "styles.css",
    "theme.scss"
],
...
```

### Add Material components
Add Material components to style the application

## AngularFire

### Setup Angular Fire
```
npm install --save firebase angularfire2
```
! Temporary bug: https://github.com/angular/angularfire2/issues/1055
`npm install promise-polyfill --save-exact`

Include the moduels:
```
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  ...
  imports: [
      AngularFireModule.initializeApp(secrets.firebaseConfig)
      AngularFireDatabaseModule,
      AngularFireAuthModule
      ...
  ],
  ...
})
```

### Add Firebase Auth and Database to the application
All you need to edit are the Auth and Database services!
