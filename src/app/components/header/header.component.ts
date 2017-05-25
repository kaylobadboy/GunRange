import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {


  constructor(public LoginService: LoginService) {


  }

}
