import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDetailsPage } from './info-details.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDetailsPageRoutingModule {}
