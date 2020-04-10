import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayOutComponent } from './modules/layout-module';

export const app_routes = [
  {
    path:'',
    component:AppLayOutComponent
  }
];
export const app_external_routes =  [
 
];
const routes: Routes = [
  ...app_routes,
  ...app_external_routes,
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
