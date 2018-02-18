import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { GuestlistComponent } from "../guestlist/guestlist.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guestlist', component: GuestlistComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
