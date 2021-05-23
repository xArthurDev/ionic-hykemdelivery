import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherOptionsPageRoutingModule } from './other-options-routing.module';

import { OtherOptionsPage } from './other-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherOptionsPageRoutingModule
  ],
  declarations: [OtherOptionsPage]
})
export class OtherOptionsPageModule {}
