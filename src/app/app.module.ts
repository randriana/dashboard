import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { GuestlistComponent } from './guestlist/guestlist.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { BackendService } from './backend.service';
import { NumberOfAttendantsPipe } from './number-of-attendants.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    GuestlistComponent,
    NumberOfAttendantsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})

export class AppModule { }
