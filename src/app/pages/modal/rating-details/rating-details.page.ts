import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.page.html',
  styleUrls: ['./rating-details.page.scss'],
})
export class RatingDetailsPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBackToAssistanceDetails() {
    this.navCtrl.back()
  }
}
