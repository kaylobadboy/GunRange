import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  items: FirebaseListObservable<any>;
  nameSubject: Subject<any>;


  constructor(db: AngularFireDatabase) {

    this.nameSubject = new Subject();
    this.items = db.list('/members', {
      query: {
        orderByChild: 'name',

      }
    });
  }
  ngOnInit() {
  }

  addItem(name: string, paydate: string, paydue: string) {
    this.items.push({ name: name, paydate: paydate, paydue: paydue });
  }

  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    console.log(key);
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }

  check(item) {

  }

}
