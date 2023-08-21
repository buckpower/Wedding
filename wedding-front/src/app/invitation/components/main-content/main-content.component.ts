import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  // calendarTitle = 'Nunta - Cristian & Sofia';
  // calendarLocation = environment.eventLocationName;
  // calendarStartDate = environment.eventDate;
  // calendarDebug = environment.production;

  // apiLoaded: Observable<boolean>;

  // options: google.maps.MapOptions = {
  //   center: {lat: environment.locationLat, lng: environment.locationLng},
  //   zoom: 15
  // };

// //https://maps.google.com/maps?ll=46.994075,27.588719&z=14&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=10906814814240898848
  // markerOptions: google.maps.MarkerOptions = {draggable: false};
  // markerPosition: google.maps.LatLngLiteral = {
  //   lat: environment.locationLat, lng: environment.locationLng
  // };

  // constructor(httpClient: HttpClient) {
  //   // If you're using the `<map-heatmap-layer>` directive, you also have to include the `visualization` library 
  //   // when loading the Google Maps API. To do so, you can add `&libraries=visualization` to the script URL:
  //   // https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization

  //   this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.mapApiKey}`, 'callback')
  //       .pipe(
  //         map(() => true),
  //         catchError(() => of(false)),
  //       );
        
  // }
  ngOnInit(): void {
  }
}
