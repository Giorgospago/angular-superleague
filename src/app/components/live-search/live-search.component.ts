import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.scss']
})
export class LiveSearchComponent implements OnInit {

  public search: string = "";
  public teams: any = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchSearchResults();
    this.route.queryParams.subscribe((query: any) => {
      this.search = query.name || "";
      this.fetchSearchResults();
    });
  }

  public changeUrlParams() {
    this.router.navigate([], {
      queryParams: {name: this.search}
    });
  }

  public fetchSearchResults() {
    this
      .http
      .get(environment.baseUrl + "/search", {
        params: {
          key: this.search
        }
      })
      .subscribe((response: any) => {
        if (response.success) {
          this.teams = response.data;
        }
      });
  }

}
