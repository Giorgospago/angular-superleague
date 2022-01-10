import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public createUploadPercentage: number = 0;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public fetchTeams() {
    return this.http.get(environment.baseUrl + "/superleague");
  }

  public deleteTeam(id: string) {
    return this.http
      .delete(environment.baseUrl + "/superleague/" + id)
  }

  public createTeam(data: any) {
    const formData = new FormData();
    formData.append('logo', data.logo);
    formData.append('name', data.name);
    formData.append('points', `${data.points}`);

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
          this.createUploadPercentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.router.navigate(["/"]);
        }
      });
  }
  
}
