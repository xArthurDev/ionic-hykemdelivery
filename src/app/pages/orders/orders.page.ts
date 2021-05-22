import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  slidesOptions = {
    slidesPerView: 3
  }
  slidesOptions2 = {
    slidesPerView: 1
  }

  constructor() { }

  ngOnInit() {
  }

}
