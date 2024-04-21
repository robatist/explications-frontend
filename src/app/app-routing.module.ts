import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplicationListComponent } from './explication-list/explication-list.component';
import { ExplicationDetailsComponent } from './explication-details/explication-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/explications'
   },
   {
    path: 'explications', 
    component: ExplicationListComponent,
    title: 'Home Page'
   },
   {
    path: 'explicationDetail/:id', 
    component: ExplicationDetailsComponent,
    title: 'Explication Details'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
