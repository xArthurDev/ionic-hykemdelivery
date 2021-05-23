import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.page.html',
  styleUrls: ['./info-details.page.scss'],
})
export class InfoDetailsPage implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Horários de entrega',
      cssClass: 'my-custom-class2',
      buttons: [{
        text: 'Segunda - 10h00 às 17h00',
        role: 'destructive',
        icon: 'today-outline',
        handler: () => {
          console.log('Delete clicked')
        }
      }, {
        text: 'Terça - 10h00 às 17h00',
        icon: 'today-outline',
        handler: () => {
          console.log('Share clicked')
        }
      }, {
        text: 'Quarta - 10h00 às 17h00',
        icon: 'today-outline',
        handler: () => {
          console.log('Play clicked')
        }
      }, {
        text: 'Quinta - 10h00 às 17h00',
        icon: 'today-outline',
        handler: () => {
          console.log('Favorite clicked')
        }
      }, {
        text: 'Sexta - 10h00 às 17h00',
        icon: 'today-outline',
        role: 'today-outline',
        handler: () => {
          console.log('Cancel clicked')
        }
      }]
    })
    await actionSheet.present()
  }

  goBackToAssistanceDetails() {
    this.navCtrl.back()
  }
}
