import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    InvitationPageComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MaterialModule,
    InvitationRoutingModule,
    
  ]
})
export class InvitationModule { }
