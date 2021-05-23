import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.page.html',
  styleUrls: ['./cellphone.page.scss'],
})
export class CellphonePage implements OnInit {

  currentContentDisplay: string

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.currentContentDisplay = 'cellphone'
  }

  goToConfirmCellphoneDisplay() {
    this.currentContentDisplay = 'confirm-cellphone'
  }

  goBackToCellphoneDisplay() {
    this.currentContentDisplay = 'cellphone'
  }

  goBackToDashboard() {
    this.navCtrl.back()
  }

  goToHomePage() {
    return this.navCtrl.navigateForward('home')
  }
}
