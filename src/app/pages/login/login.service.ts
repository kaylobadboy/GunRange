import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router'
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  headers: Headers;
  token: string = null;
  user: Observable<firebase.User>;


  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
  }

  login() {
    this.router.navigate(['']);
  }

  loggedin(){
    return this.user;
  }
    logout(){
      firebase.auth().signOut().then(function() {
        console.log('Sign-out successful');
        this.LoginService.logout();

      }).catch(function(error) {
        console.log('Sign-out error');
      });
  }


}
