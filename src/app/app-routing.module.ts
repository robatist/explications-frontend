import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ExplicationListComponent } from './components/explication-list/explication-list.component';
import { ExplicationDetailsComponent } from './components/explication-details/explication-details.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
   },
   {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page',
   },
   {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup Page',
   },
   {
    path: 'explications', 
    component: ExplicationListComponent,
    title: 'Home Page',
    canActivate: [
      AuthGuard
    ]
   },
   {
    path: 'explicationDetail/:id', 
    component: ExplicationDetailsComponent,
    title: 'Explication Details',
    canActivate: [
      AuthGuard
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
