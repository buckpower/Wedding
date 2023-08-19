import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InvitationRoutingModule } from './invitation-routing.module';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [
    InvitationPageComponent,
    ToolbarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule
  ]
})
export class InvitationModule { }
