import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, map, take, tap } from 'rxjs/operators';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public lat = 0;
  public lng = 0;

  constructor(public configService: ConfigService) {
  }

  ngOnInit() {
    this.configService.counter
      .pipe(
        map((data: any) => {
          return data * 3;
        }),
        filter(data => data > 100),
        take(5),
        distinctUntilChanged()
      )
      .subscribe(data => {
        console.log("AppComponent", data);
      });








    this.configService
      .coordinates
      .pipe(
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
      )
      .subscribe((coords: any) => {
        this.lat = coords.lat;
        this.lng = coords.lng;
      });




  }

  public setRandomNumber() {
    const n = 50;
    this.configService.counter.next(n);
  }

}
