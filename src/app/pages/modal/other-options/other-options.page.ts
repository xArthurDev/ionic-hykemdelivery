import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonHelpers } from 'src/app/helpers/commonHelpers';

@Component({
  selector: 'app-other-options',
  templateUrl: './other-options.page.html',
  styleUrls: ['./other-options.page.scss'],
})
export class OtherOptionsPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public commonHelpers: CommonHelpers
  ) { }

  ngOnInit() {
  }

  async goToEmailPage() {
    await this.commonHelpers.otherOptionsModal.dismiss()
    this.navCtrl.navigateForward('email')
  }

  async goToCellphonePage() {
    await this.commonHelpers.otherOptionsModal.dismiss()
    this.navCtrl.navigateForward('cellphone')
  }
}
