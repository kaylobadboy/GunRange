import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HeaderComponent} from  './header/header.component';
import { AppComponent } from './app.component';
import { UpperlogoComponent } from './upperlogo/upperlogo.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { ContactComponent } from './contact/contact.component';
import {routing} from "./app.routing";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpperlogoComponent,
    HomeComponent,
    MembershipComponent,
    NewsEventsComponent,
    ContactComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWkkWYyJt5nb0mURORr4HEFcX_ZPox12g'
    }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
