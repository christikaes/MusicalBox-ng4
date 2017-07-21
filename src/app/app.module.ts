import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MusicalBoxComponent } from './musical-box/musical-box.component';
import { MusicalBoxListComponent } from './musical-box-list/musical-box-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationDialogComponent } from './authentication-dialog/authentication-dialog.component';

import { AuthenticationService } from './authentication.service';
import { DatabaseService } from './database.service';

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
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    DatabaseService
  ],
  entryComponents: [
    AuthenticationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
