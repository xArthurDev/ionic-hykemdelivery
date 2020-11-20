import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ADetailsPageRoutingModule } from './a-details-routing.module';

import { ADetailsPage } from './a-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ADetailsPageRoutingModule
  ],
  declarations: [ADetailsPage]
})
export class ADetailsPageModule {}
