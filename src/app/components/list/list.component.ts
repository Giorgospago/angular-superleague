import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public teams: any = [];

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.fetchTeams();
  }

  public fetchTeams() {
    this.http
    .get("http://localhost:3000/superleague")
    .subscribe((response: any) => {
      if(response.success) {
        this.teams = response.data;
      }
    });
  }

  public deleteTeam(id: string) {
    this.http
      .delete("http://localhost:3000/superleague/" + id)
      .subscribe(() => {
        this.fetchTeams();
      });
  }

}
