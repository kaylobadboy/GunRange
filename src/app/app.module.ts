import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UpperlogoComponent } from './upperlogo/upperlogo.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { ContactComponent } from './contact/contact.component';
import {routing} from './app.routing';
import { AdminPanelComponent } from './pages/admin-panel-base/admin-panel.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SponsorstripComponent } from './components/bottomsponsors/sponsorstrip.component';
import { FooterComponent } from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {AddAdminComponent} from './pages/admin-panel/add-admin/add-admin.component';
import {EditHomePageComponent} from './pages/admin-panel/edit-home-page/edit-home-page.component';


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
    SponsorstripComponent,
    FooterComponent,
    EditHomePageComponent,
    AddAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWkkWYyJt5nb0mURORr4HEFcX_ZPox12g'
    }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
