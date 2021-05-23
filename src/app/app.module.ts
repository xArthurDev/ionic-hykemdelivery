import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TabsPage } from './components/tabs/tabs.page';
import { TabsPageModule } from './components/tabs/tabs.module';
import { TypeDetailsPage } from './pages/modal/type-details/type-details.page';
import { ScheduleDetailsPage } from './pages/modal/schedule-details/schedule-details.page';

@NgModule({
  declarations: [AppComponent, TypeDetailsPage, ScheduleDetailsPage],
  entryComponents: [TypeDetailsPage, ScheduleDetailsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, TabsPageModule],
  providers: [
    TabsPage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
