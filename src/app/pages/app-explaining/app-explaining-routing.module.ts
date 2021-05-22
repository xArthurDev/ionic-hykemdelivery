import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppExplainingPage } from './app-explaining.page';

const routes: Routes = [
  {
    path: '',
    component: AppExplainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppExplainingPageRoutingModule {}
