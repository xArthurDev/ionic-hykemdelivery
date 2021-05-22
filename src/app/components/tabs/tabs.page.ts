import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'tabs-component',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToHomePage() {
    return this.navCtrl.navigateForward('home')
  }

  goToOrdersPage() {
    return this.navCtrl.navigateForward('orders')
  }

  goToProfilePage() {
    return this.navCtrl.navigateForward('profile')
  }
}
