import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public team = {
    logo: "",
    name: "",
    points: 0
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public createTeam() {
    this.http
      .post("https://api.deltaleague.cf/create", this.team)
      .subscribe(() => {
          this.router.navigate(["/"]);
      });
  }

}
