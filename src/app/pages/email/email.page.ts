import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  currentContentDisplay: string

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.currentContentDisplay = 'email'
  }

  goToConfirmEmailDisplay() {
    this.currentContentDisplay = 'confirm-email'
  }

  goBackToEmailDisplay() {
    this.currentContentDisplay = 'email'
  }

  goBackToDashboard() {
    this.navCtrl.back()
  }

  goToHomePage() {
    return this.navCtrl.navigateForward('home')
  }
}
