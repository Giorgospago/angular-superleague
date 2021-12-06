import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.fetchTeam(params.teamId);
    });
  }

  public fetchTeam(id: string) {
    this.http
      .get("http://localhost:3000/superleague/" + id)
      .subscribe((response: any) => {
        if (response.success) {
            this.team = response.data;
        }
      });
  }

}
