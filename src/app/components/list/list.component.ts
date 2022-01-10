import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { TeamService } from 'src/app/services/http/team.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public total: number = 0;
  public teams: any = [];

  constructor(
    public configService: ConfigService,
    public teamService: TeamService
  ) {}

  ngOnInit() {
    this.fetchTeams();

    this.configService.counter
      .subscribe((data) => {
          console.log(data);
      });
  }

  public fetchTeams() {
    this.total = 0;

    this.teamService.fetchTeams()
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
    this.teamService.deleteTeam(id)
      .subscribe(() => {
        this.fetchTeams();
      });
  }

}
