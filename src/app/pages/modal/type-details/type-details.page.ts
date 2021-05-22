import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.page.html',
  styleUrls: ['./type-details.page.scss'],
})
export class TypeDetailsPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBackToAssistanceDetails() {
    this.navCtrl.back()
  }
}
