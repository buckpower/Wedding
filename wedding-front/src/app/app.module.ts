import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuestService } from './services/guest.service';

const routes: Routes = [
  {path: 'invitation', loadChildren: () => import('./invitation/invitation.module').then(m => m.InvitationModule)},
  {path: '**', redirectTo: 'invitation'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
