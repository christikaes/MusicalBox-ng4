import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

  constructor() { }

  // Returns an observable stream of whether or not the user is logged in
  public $auth(): Observable<boolean>{
    // TODO!!
    return new Observable((observer) => {
      observer.next(false);
    })
  }

  // Returns an observable strem of success/errors when logging in
  public $login(email: string, password: string): Observable<any> {
    // TODO!!
    return new Observable((observer) => {
      observer.next({error: "Not implemented"});
    })
  }

  // Returns an observable strem of success/errors when registering in
  public $register(email: string, password: string): Observable<any> {
    // TODO!!
    return new Observable((observer) => {
      observer.next({error: "Not implemented"});
    })
  }

  // Returns an observable strem of success/errors when logging out
  public logout() {
    // TODO!!
  }
}
