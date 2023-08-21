import { Component } from '@angular/core';

import 'add-to-calendar-button';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-date',
  templateUrl: './event-date.component.html',
  styleUrls: ['./event-date.component.scss']
})
export class EventDateComponent {
  calendarTitle = 'Nunta - Cristian & Sofia';
  calendarLocation = environment.eventLocationName;
  calendarStartDate = environment.eventDate;
  calendarDebug = environment.production;
}
