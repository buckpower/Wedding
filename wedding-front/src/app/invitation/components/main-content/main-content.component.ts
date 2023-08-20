import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import 'add-to-calendar-button';
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

  constructor() { }

  ngOnInit(): void {

  }

}
