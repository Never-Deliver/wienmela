import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RulesInfoComponent } from '../rules-info-module/component/rules-info-component/rules-info.component';


 const rulesRoutes:Routes = [
  {
    path:'',
    component:RulesInfoComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(rulesRoutes)],
  exports: [RouterModule]
})
export class RulesInfoRoutingModule { }
