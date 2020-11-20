import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CellphonePageRoutingModule } from './cellphone-routing.module';

import { CellphonePage } from './cellphone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CellphonePageRoutingModule
  ],
  declarations: [CellphonePage]
})
export class CellphonePageModule {}
