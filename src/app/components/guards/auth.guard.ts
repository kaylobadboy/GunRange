
import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import {LoginService} from '../../services/login.service';


@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(public LoginService: LoginService, private router: Router) { }

  canActivate(){
    console.log('logged in? :' + this.LoginService.loggedin());

    if (this.LoginService.loggedin()) {
      return true;
    } else {
      this.router.navigate(['/Login'])
      return false;

    }

  }
}
