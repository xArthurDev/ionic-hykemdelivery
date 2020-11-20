import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeDetailsPage } from './type-details.page';

const routes: Routes = [
  {
    path: '',
    component: TypeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeDetailsPageRoutingModule {}
