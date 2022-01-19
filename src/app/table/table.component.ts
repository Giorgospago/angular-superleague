import { Component, OnInit } from '@angular/core';
import { users } from "../files/users";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public users = users;

  constructor() { }

  ngOnInit(): void {
  }

}
