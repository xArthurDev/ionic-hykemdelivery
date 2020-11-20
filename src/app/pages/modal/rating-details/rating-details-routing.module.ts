import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingDetailsPage } from './rating-details.page';

const routes: Routes = [
  {
    path: '',
    component: RatingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingDetailsPageRoutingModule {}
