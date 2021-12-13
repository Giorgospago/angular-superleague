import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
      .post(environment.baseUrl + "/create", this.team)
      .subscribe(() => {
          this.router.navigate(["/"]);
      });
  }

}
