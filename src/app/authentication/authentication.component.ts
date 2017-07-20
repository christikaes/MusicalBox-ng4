import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { MdDialog } from '@angular/material';
import { AuthenticationDialogComponent } from '../authentication-dialog/authentication-dialog.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public $auth: Observable<boolean>;

  constructor(
    private authenticationService: AuthenticationService,
    private mdDialog: MdDialog
  ) { }

  ngOnInit() {
    // Subscribe to changes in Authentication, and update loggedIn
    this.$auth = this.authenticationService.$auth();
  }

  // Open the login dialog
  public login() {
    this.mdDialog.open(AuthenticationDialogComponent)
  }

  // Logout the currently signed in user
  public logout() {
    this.authenticationService.logout();
  }

}
