import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-authentication-dialog',
  templateUrl: './authentication-dialog.component.html',
  styleUrls: ['./authentication-dialog.component.css']
})
export class AuthenticationDialogComponent implements OnInit {
  public loading = false;
  public email: string;
  public password: string;
  public name: string;
  public error: string;

  constructor(
    private authenticationService: AuthenticationService,
    private mdDialogRef: MdDialogRef<AuthenticationDialogComponent>
  ) { }

  ngOnInit() { }

  // Login with the email and password from the model
  public login() {
    this.loading = true;
    this.error = null;

    this.authenticationService.$login(this.email, this.password).subscribe((result) => {
      if (result.error) {
        this.error = result.error
      }
      if (result.success) {
        this.mdDialogRef.close();
      }
      this.loading = false;
    });
  }

  // Register with the email and password from the model
  public register(){
    this.loading = true;
    this.error = null;
    this.authenticationService.$register(this.email, this.password).subscribe((result) => {
      if (result.error) {
        this.error = result.error
      } else {
        this.mdDialogRef.close();
      }
      this.loading = false;
    });
  }

}
