import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public teams = [
  //   {
  //     _id: "fthtyur6hr565ryye4ye5y",
  //     name: "Olympiakos",
  //     logo: "https://ssl.gstatic.com/onebox/media/sports/logos/FqnQ9nu7UDiSgnXKohdIgg_96x96.png",
  //     points: 50
  //   },
  //   {
  //     _id: "fegu76t5u7fsetfujs5jgu",
  //     name: "PAOK",
  //     logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Hd4nrUVqkpyRru2OxOmMAw_48x48.png",
  //     points: 40
  //   }
  // ];

  public teams: any = [];

  constructor(public http: HttpClient) {
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

}
