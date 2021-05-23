import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {

  segment = "today"

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  segmentChanged(event){
    if (event.detail.value === 'today') {
      this.segment = 'today'
    }
    if (event.detail.value === 'tomorrow') {
      this.segment = 'tomorrow'
    }
  }

  goBackToAssistanceDetails() {
    this.navCtrl.back()
  }
}
