import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistanceDetailsPageRoutingModule } from './assistance-details-routing.module';

import { AssistanceDetailsPage } from './assistance-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistanceDetailsPageRoutingModule
  ],
  declarations: [AssistanceDetailsPage]
})
export class AssistanceDetailsPageModule {}
