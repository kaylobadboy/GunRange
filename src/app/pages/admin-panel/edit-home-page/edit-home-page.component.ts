import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'app-edit-home-page',
  templateUrl: './edit-home-page.component.html',
  styleUrls: ['./edit-home-page.component.css'],
})
export class EditHomePageComponent  {

  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/messages');
  }
  addItem(msg: string, type: string) {
    this.items.push({ msg: msg, type: type });
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

  return item.type;

}



}




/*
  addItem(item: any) {
    this.items.push(item);
  }


  deleteItem(item: any) {



    this.httpService.removeEvent(item )
      .subscribe(
        data => console.log(data)
      );

  }



  onSubmit(message: string, type: string){
    this.httpService.sendEvent({message: message, type : type})
      .subscribe(
        data => console.log(data)
      );


  }

  onGetData(){

    this.httpService.getAllEventData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data){
            myArray.push(data[key]);
          }
          this.items = myArray
        }
      );

  }

 */

