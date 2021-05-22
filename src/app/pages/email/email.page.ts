import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  currentContentDisplay: string

  constructor() { }

  ngOnInit() {
    this.currentContentDisplay = 'email'
  }

  goToConfirmEmailDisplay() {
    this.currentContentDisplay = 'confirm-email'
  }

  goBackToEmailDisplay() {
    this.currentContentDisplay = 'email'
  }
}
