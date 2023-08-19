import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';


@NgModule({
  declarations: [
    InvitationPageComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule
  ]
})
export class InvitationModule { }
