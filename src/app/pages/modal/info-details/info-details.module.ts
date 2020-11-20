import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDetailsPageRoutingModule } from './info-details-routing.module';

import { InfoDetailsPage } from './info-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDetailsPageRoutingModule
  ],
  declarations: [InfoDetailsPage]
})
export class InfoDetailsPageModule {}
