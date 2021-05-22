import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {

  segment = "today";

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  segmentChanged(event){
    console.log(this.segment);
    
    console.log(event);
  }

  goBackToAssistanceDetails() {
    this.navCtrl.back()
  }
}
