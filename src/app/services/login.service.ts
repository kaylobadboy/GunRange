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

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loggedin() {
    return (firebase.auth().currentUser) ? true : false;
  }
  login(email: string, password: string) {
    console.log(email + password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log('Login Successfull');
    })


      .catch(function (error) {
        console.log(error);


      });
  }
    logout() {

      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
      }


}
