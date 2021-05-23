import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToEmailPage() {
    return this.navCtrl.navigateForward('email')
  }

  goToCellphonePage() {
    return this.navCtrl.navigateForward('cellphone')
  }
}
