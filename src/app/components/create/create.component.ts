import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public percentage: number = 0;
  public file: any = null;
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
    const formData = new FormData();
    formData.append('logo', this.file);
    formData.append('name', this.team.name);
    formData.append('points', `${this.team.points}`);

    const options = {
      reportProgress: true,
    };

    const req = new HttpRequest(
      'POST', 
      environment.baseUrl + "/create", 
      formData, 
      options
    );
    this.http
      .request(req)
      .subscribe((event: any) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          // this.router.navigate(["/"])
        }
      });
  }

  public handleFile(event: any) {
    this.file = event.target.files[0];
  }

}
