import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  // Returns an observable stream of whether or not the user is logged in
  public $auth(): Observable<boolean> {
    return this.afAuth.authState.map((auth) => {
      return !!auth
    });
  }

  // Returns an observable strem of success/errors when logging in
  public $login(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
          observer.next({ error: error.message });
        })
        .then(success => {
          observer.next({ success: success })
        })
    })
  }

  // Returns an observable strem of success/errors when registering in
  public $register(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .catch(error => {
          observer.next({ error: error.message });
        })
        .then(success => {
          observer.next({ success: success })
        })
    })
  }

  // Returns an observable strem of success/errors when logging out
  public logout() {
    this.afAuth.auth.signOut();
  }
}
