import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router: Router, public LoginService: LoginService) { }
btnClick1() {
  this.router.navigateByUrl('/Admin/EditHome');
}
  btnClick2() {
    this.router.navigateByUrl('/Admin/AddAdmin');


  }
  btnClick3() {
    this.router.navigateByUrl('/Admin/ViewUsers');


  }
  ngOnInit() {
  }

}
