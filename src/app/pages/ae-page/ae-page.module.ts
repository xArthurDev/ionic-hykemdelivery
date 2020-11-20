import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AePagePageRoutingModule } from './ae-page-routing.module';

import { AePagePage } from './ae-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AePagePageRoutingModule
  ],
  declarations: [AePagePage]
})
export class AePagePageModule {}
