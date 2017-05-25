import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {LoginService} from '../../../services/login.service';
@Component({
  selector: 'app-addadmin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent  {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public LoginService: LoginService ) {
    this.user = afAuth.authState;
  }

  login(email: string, password: string) {
    console.log(email + password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log('Registration Successfull');
    })



      .catch(function(error) {
        console.log(error);


    });

  }

}




