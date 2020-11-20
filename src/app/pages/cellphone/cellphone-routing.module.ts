import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CellphonePage } from './cellphone.page';

const routes: Routes = [
  {
    path: '',
    component: CellphonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CellphonePageRoutingModule {}
