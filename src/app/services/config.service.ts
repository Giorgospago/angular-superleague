import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public mainColor: string = "#ff9050";

  public counter = new BehaviorSubject(0);
  public coordinates = new Subject();

  constructor() {

    setTimeout(() => {
      this.counter.next(100);
    }, 5000);


    navigator.geolocation
      .watchPosition(data => {
        const location = {
          lat: data.coords.latitude,
          lng: data.coords.longitude
        };

        this.coordinates.next(location);
      });

  }
}
