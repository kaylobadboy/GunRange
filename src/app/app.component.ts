import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lat = 48.0631771;
  lng = -97.08669409999999;
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private router: Router) {
    this.items = db.list('/items');
  }



}
