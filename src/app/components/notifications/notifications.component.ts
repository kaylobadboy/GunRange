import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/messages');
  }

  ngOnInit() {
  }
  check(item) {
    return item.type;
  }

}
