import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayOutComponent } from './modules/layout-module/component/app-layout/app-layout.component';
import { PageNotComponent } from './app.pagenot-found';
// import { HomeComponent } from './modules/home-module/component/home-component/home.component';

export const app_routes = [
  {
    path:'',
    component:AppLayOutComponent,
    children:[
      {
        path:'', 
        loadChildren: () =>
        import('./modules/home-module/home.module').then(m => m.HomeModule)
      },
           {
              path:'rulesinfo', 
              loadChildren: () =>
              import('./modules/rules-info-module/rules-info.module').then(m => m.RulesInfoModule)
            }
    ]
  }
];
export const app_external_routes =  [
  { path:'pagenotfound',
  component:PageNotComponent}
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
