import {Component, Input, Output, OnChanges, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() model: any
  @Input() title: string
  addForm: any = undefined
  showAdd = false
  showEdit = false
  columns: string[] = []
  selected: any[] = []
  data: any[] = []
  order: any = {}
  currentOrder: string = undefined
  error: string = undefined

  constructor(private LoginService: LoginService) { }
  ngOnChanges(){

  }


}
