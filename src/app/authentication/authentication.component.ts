import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public loading = false;
  public email: string;
  public password: string;
  public name: string;
  public error: string;
  public $auth: Observable<boolean>;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // Subscribe to changes in Authentication, and update loggedIn
    this.$auth = this.authenticationService.$auth();
  }

  // Login with the email and password from the model
  public login(){
    this.loading = true;
    this.error = null;

    this.authenticationService.$login(this.email, this.password).subscribe((result)=>{
      if(result.error) {
        this.error = result.error
      }
      this.loading = false;
    });
  }

  // Register with the email and password from the model
  public register(){
    this.loading = true;
    this.error = null;
    this.authenticationService.$register(this.email, this.password).subscribe((result)=>{
      if(result.error) {
        this.error = result.error
      }
      this.loading = false;
    });
  }

  // Logout the currently signed in user
  public logout() {
    this.authenticationService.logout();
  }

}
