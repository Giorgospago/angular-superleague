import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public teamId: any = null;

  public team: any = {
    logo: "",
    name: "",
    points: 0
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.teamId = params.teamId;
      this.fetchTeam(this.teamId);
    });
  }

  public fetchTeam(id: string) {
    this.http
      .get(environment.baseUrl + "/superleague/" + id)
      .subscribe((response: any) => {
        if (response.success) {
            this.team = response.data;
        }
      });
  }

  public updateTeam() {
    this.http
      .put(environment.baseUrl + "/superleague/" + this.teamId, this.team)
      .subscribe(() => {
        this.router.navigate(["/"]);
      });
  }

}
