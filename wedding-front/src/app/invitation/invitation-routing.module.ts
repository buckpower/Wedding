import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {path: '', component: InvitationPageComponent,
  children: [
    {path: '', component: MainContentComponent}
  ]
},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationRoutingModule { }
