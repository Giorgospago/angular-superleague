import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public total: number = 0;
  public teams: any = [];

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.fetchTeams();
  }

  public fetchTeams() {
    this.total = 0;
    this.http
    .get(environment.baseUrl + "/superleague")
    .subscribe((response: any) => {
      if(response.success) {
        this.teams = response.data;

        for (let team of this.teams) {
          this.total += team.points;
        }
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
