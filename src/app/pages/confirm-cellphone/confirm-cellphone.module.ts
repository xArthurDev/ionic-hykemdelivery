import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmCellphonePageRoutingModule } from './confirm-cellphone-routing.module';

import { ConfirmCellphonePage } from './confirm-cellphone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmCellphonePageRoutingModule
  ],
  declarations: [ConfirmCellphonePage]
})
export class ConfirmCellphonePageModule {}
