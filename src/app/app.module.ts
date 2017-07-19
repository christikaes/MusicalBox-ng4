import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MusicalBoxComponent } from './musical-box/musical-box.component';
import { MusicalBoxListComponent } from './musical-box-list/musical-box-list.component';

import { AuthenticationService } from './authentication.service';
import { DatabaseService } from './database.service';
import { AuthenticationComponent } from './authentication/authentication.component';

import { secrets } from './secrets';

@NgModule({
  declarations: [
    AppComponent,
    MusicalBoxComponent,
    MusicalBoxListComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
