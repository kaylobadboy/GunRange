
import {RouterModule, Routes} from '@angular/router';
import {AppModule} from './app.module';
import {NewsEventsComponent} from "./news-events/news-events.component";
import {MembershipComponent} from "./membership/membership.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {AdminPanelComponent} from "./pages/admin-panel-base/admin-panel.component";


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},

  { path: 'Member', component: MembershipComponent},
  { path: 'News',  component: NewsEventsComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'Admin', component: AdminPanelComponent}
// ,
  // {path:  '', component: UserComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
