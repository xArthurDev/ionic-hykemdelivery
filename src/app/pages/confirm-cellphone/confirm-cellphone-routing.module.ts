import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmCellphonePage } from './confirm-cellphone.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmCellphonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCellphonePageRoutingModule {}
