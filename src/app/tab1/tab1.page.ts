import { Component } from '@angular/core';
import { Data, DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: Data[];

  slidesOptions = {
    slidesPerView: 3
  };
  slidesOptions2 = {
    slidesPerView: 1.6
  };
  slidesOptions3 = {
    slidesPerView: 2
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllData().subscribe(res => {
      this.data = res;
    });
  }
}

