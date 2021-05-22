import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppExplainingPageRoutingModule } from './app-explaining-routing.module';

import { AppExplainingPage } from './app-explaining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppExplainingPageRoutingModule
  ],
  declarations: [AppExplainingPage]
})
export class AppExplainingPageModule {}
