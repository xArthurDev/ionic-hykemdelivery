import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AePagePage } from './ae-page.page';

const routes: Routes = [
  {
    path: '',
    component: AePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AePagePageRoutingModule {}
