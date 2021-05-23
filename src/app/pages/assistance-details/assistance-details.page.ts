import { Component, OnInit } from '@angular/core'
import { Data, DataService } from '../../services/data.service'
import { ActivatedRoute, Router } from '@angular/router'
import { NavController, LoadingController, ModalController } from '@ionic/angular'
import { TypeDetailsPage } from '../modal/type-details/type-details.page'
import { ScheduleDetailsPage } from '../modal/schedule-details/schedule-details.page'

@Component({
  selector: 'app-assistance-details',
  templateUrl: './assistance-details.page.html',
  styleUrls: ['./assistance-details.page.scss'],
})
export class AssistanceDetailsPage implements OnInit {

  data: Data = {
    title: 'nome',
    subtitle: 'descrição',
    rating: 5,
    distance: '10 km',
    pricemin: 'A partir de R$80',
    time: '60, 90 min',
    deliveryprice: 'R$10,00',
    description: 'um estabelecimento...',
    image: ''
  }
 
  dataId = null

  basePath = 'assistance-details'

  modalCurrentView: any

  slidesOptions2 = {
    slidesPerView: 2.2
  }

  constructor(
    private dataService: DataService, 
    private loadingController: LoadingController, 
    private route: ActivatedRoute, 
    private navCtrl: NavController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.dataId = this.route.snapshot.params['id']
    if (this.dataId)  {
      this.loadData()
    }
  }
 
  async loadData() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      cssClass: 'transparent',
      message: 'Carregando..'
    })
    await loading.present()
 
    this.dataService.getData(this.dataId).subscribe(res => {
      this.data = res
      loading.dismiss()
      console.log(res)
    })
  }

  selectTypeDetails() {
    this.modalCurrentView = TypeDetailsPage
    return this.OpenModal()
  }

  selectScheduleDetails() {
    this.modalCurrentView = ScheduleDetailsPage
    return this.OpenModal()
  }

  async OpenModal() {
    const assistanceDetailsModal = await this.modalCtrl.create({
      component: this.modalCurrentView,
      showBackdrop: true,
      mode: 'ios',
      cssClass: 'assistance-modal'
    })

    return await assistanceDetailsModal.present();
  }

  goBackToHomePage() {
    this.navCtrl.back()
  }

  goToInfoDetailsPage() {
    return this.navCtrl.navigateForward(`${this.basePath}/${this.dataId}/info-details`)
  }

  goToRatingDetailsPage() {
    return this.navCtrl.navigateForward(`${this.basePath}/${this.dataId}/rating-details`)
  }
}
