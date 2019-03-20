import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [ { path: 'login', component: LoginComponent },
                { path: 'registration', component: RegistrationComponent } ]
  },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
