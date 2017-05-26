
import {RouterModule, Routes} from '@angular/router';
import {AppModule} from './app.module';
import {NewsEventsComponent} from "./pages/news-events/news-events.component";
import {MembershipComponent} from "./pages/membership/membership.component";
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {AdminPanelComponent} from "./pages/admin-panel-base/admin-panel.component";
import {AddAdminComponent} from "./pages/admin-panel/add-admin/add-admin.component";
import {EditHomePageComponent} from "./pages/admin-panel/edit-home-page/edit-home-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGaurd} from "./components/guards/auth.guard";
import {ViewusersComponent} from "./pages/admin-panel/viewusers/viewusers.component";


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},

  { path: 'Member', component: MembershipComponent},
  { path: 'News',  component: NewsEventsComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'Admin', component: AdminPanelComponent, canActivate: [AuthGaurd]},
  { path: 'Admin/AddAdmin', component: AddAdminComponent, canActivate: [AuthGaurd] },
  { path: 'Admin/EditHome', component: EditHomePageComponent, canActivate: [AuthGaurd]},
  { path: 'Admin/ViewUsers', component: ViewusersComponent, canActivate: [AuthGaurd]},
  { path: 'Login', component: LoginComponent}
// ,
  // {path:  '', component: UserComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
