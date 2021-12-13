import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    .get(environment.baseUrl + "/superleague")
    .subscribe((response: any) => {
      if(response.success) {
        this.teams = response.data;
      }
    });
  }

  public deleteTeam(id: string) {
    this.http
      .delete(environment.baseUrl + "/superleague/" + id)
      .subscribe(() => {
        this.fetchTeams();
      });
  }

}
