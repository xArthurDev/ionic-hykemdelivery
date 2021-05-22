import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.page.html',
  styleUrls: ['./cellphone.page.scss'],
})
export class CellphonePage implements OnInit {

  currentContentDisplay: string

  constructor() { }

  ngOnInit() {
    this.currentContentDisplay = 'cellphone'
  }

  goToConfirmCellphoneDisplay() {
    this.currentContentDisplay = 'confirm-cellphone'
  }

  goBackToCellphoneDisplay() {
    this.currentContentDisplay = 'cellphone'
  }
}
