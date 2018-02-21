import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public registro(email, pass) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
  }
  public login(email, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }
  public loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }
  public isLogged() {
    return this.afAuth.authState;
  }
  public logOut() {
    return this.afAuth.auth.signOut();
  }
}
