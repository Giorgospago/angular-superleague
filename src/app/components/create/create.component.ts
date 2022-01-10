import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { TeamService } from 'src/app/services/http/team.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  public counterSub: any = null;

  public file: any = null;
  public team = {
    logo: "",
    name: "",
    points: 0
  };

  constructor(
    public teamService: TeamService,
    public configService: ConfigService
  ) { }

  ngOnInit(): void {

    this.counterSub = this.configService.counter
      .subscribe((data) => {
        console.log("create component", data);
      });

  }

  public createTeam() {
    const data = {
      logo: this.file,
      name: this.team.name,
      points: `${this.team.points}`
    };

    this.teamService.createTeam(data);
  }

  public handleFile(event: any) {
    this.file = event.target.files[0];
  }


  ngOnDestroy() {
    console.log("leaving create component...");
    this.counterSub.unsubscribe();
  }

}
