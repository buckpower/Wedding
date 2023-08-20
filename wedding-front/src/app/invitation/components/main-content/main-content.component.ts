import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import 'add-to-calendar-button';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  calendarTitle = 'Nunta - Cristian & Sofia';
  calendarLocation = environment.eventLocationName;
  calendarStartDate = environment.eventDate;
  calendarDebug = environment.production;

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    // If you're using the `<map-heatmap-layer>` directive, you also have to include the `visualization` library 
    // when loading the Google Maps API. To do so, you can add `&libraries=visualization` to the script URL:
    // https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization
1
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.mapApiKey}`, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }
  ngOnInit(): void {
  }
}
