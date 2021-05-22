import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistanceDetailsPage } from './assistance-details.page';

const routes: Routes = [
  {
    path: '',
    component: AssistanceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistanceDetailsPageRoutingModule {}
