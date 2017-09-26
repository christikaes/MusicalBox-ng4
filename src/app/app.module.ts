import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
declare var require: any;
const persistState = require('redux-localstorage');
import { IAppState, INITITAL_STATE } from './app.store'
import { rootReducer } from './app.reducer'

import { AppComponent } from './app.component';
import { MusicalBoxComponent } from './musical-box/musical-box.component';
import { MusicalBoxListComponent } from './musical-box-list/musical-box-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationDialogComponent } from './authentication-dialog/authentication-dialog.component';

import { AuthenticationService } from './authentication.service';
import { DatabaseService } from './database.service';
import { AppActions } from './app.actions'

import { secrets } from './secrets';

@NgModule({
  declarations: [
    AppComponent,
    MusicalBoxComponent,
    MusicalBoxListComponent,
    AuthenticationComponent,
    AuthenticationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(secrets.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgReduxModule
  ],
  providers: [
    AuthenticationService,
    DatabaseService,
    AppActions
  ],
  entryComponents: [
    AuthenticationDialogComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devToolsExtension: DevToolsExtension
  ) {
    ngRedux.configureStore(
      rootReducer,
      INITITAL_STATE,
      [],
      [
        devToolsExtension.enhancer(),
        persistState()
      ]
    )
  }
}
