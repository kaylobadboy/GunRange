
import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import {LoginService} from '../../services/login.service';

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private userService: LoginService, private router: Router) { }

  canActivate() {
    if (this.userService.loggedin()) {
      return true;
    } else {
      this.router.navigate(['/Login'])
      return false;
    }
  }
}
