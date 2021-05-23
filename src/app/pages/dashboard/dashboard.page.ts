import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CommonHelpers } from 'src/app/helpers/commonHelpers';
import { OtherOptionsPage } from '../modal/other-options/other-options.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    public commonHelpers: CommonHelpers
  ) { }

  ngOnInit() {
  }

  async openModal() {
    this.commonHelpers.otherOptionsModal = await this.modalCtrl.create({
      component: OtherOptionsPage,
      showBackdrop: true,
      mode: 'ios',
      cssClass: 'other-options-modal'
    })

    return await this.commonHelpers.otherOptionsModal.present()
  }
}
