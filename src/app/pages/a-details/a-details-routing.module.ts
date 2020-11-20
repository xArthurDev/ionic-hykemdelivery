import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ADetailsPage } from './a-details.page';

const routes: Routes = [
  {
    path: '',
    component: ADetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ADetailsPageRoutingModule {}
