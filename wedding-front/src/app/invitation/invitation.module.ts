import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { InvitationRoutingModule } from './invitation-routing.module';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    InvitationPageComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InvitationRoutingModule
  ]
})
export class InvitationModule { }
