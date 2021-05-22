import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explaining',
  templateUrl: './app-explaining.page.html',
  styleUrls: ['./app-explaining.page.scss'],
})
export class AppExplainingPage implements OnInit {

  slidesOptions = {
    slidesPerView: 1
  }

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToDashboard() {
    return this.navCtrl.navigateForward('dashboard')
  }

}
