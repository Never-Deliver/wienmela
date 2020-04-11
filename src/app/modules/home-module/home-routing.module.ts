import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home-module/component/home-component/home.component';
import { CommonModule } from '@angular/common';


 const homeroutes:Routes = [
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeroutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
