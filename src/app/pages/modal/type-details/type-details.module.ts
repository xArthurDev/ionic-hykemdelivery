import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeDetailsPageRoutingModule } from './type-details-routing.module';

import { TypeDetailsPage } from './type-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeDetailsPageRoutingModule
  ],
  declarations: [TypeDetailsPage]
})
export class TypeDetailsPageModule {}
