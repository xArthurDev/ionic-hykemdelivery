import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingDetailsPageRoutingModule } from './rating-details-routing.module';

import { RatingDetailsPage } from './rating-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingDetailsPageRoutingModule
  ],
  declarations: [RatingDetailsPage]
})
export class RatingDetailsPageModule {}
