import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {

  segment = "today";

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event){
    console.log(this.segment);
    
    console.log(event);
  }

}
