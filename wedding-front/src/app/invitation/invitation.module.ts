import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { MaterialModule } from '../shared/material.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { IntroComponent } from './components/intro/intro.component';
import { EventDateComponent } from './components/event-date/event-date.component';
import { EventLocationComponent } from './components/event-location/event-location.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPersonDialogComponent } from './components/new-person-dialog/new-person-dialog.component';

@NgModule({
  declarations: [
    InvitationPageComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    IntroComponent,
    EventDateComponent,
    EventLocationComponent,
    SignupComponent,
    NewPersonDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MaterialModule,
    InvitationRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule
  ]
})
export class InvitationModule { }
