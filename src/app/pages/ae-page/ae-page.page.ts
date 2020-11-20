import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ae-page',
  templateUrl: './ae-page.page.html',
  styleUrls: ['./ae-page.page.scss'],
})
export class AePagePage implements OnInit {

  slidesOptions = {
    slidesPerView: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
