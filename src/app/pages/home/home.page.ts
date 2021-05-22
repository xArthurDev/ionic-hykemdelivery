import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'
import { CommonHelpers } from 'src/app/helpers/commonHelpers'
import { Data, DataService } from 'src/app/services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: Data[]

  slidesOptions = {
    slidesPerView: 3
  }
  slidesOptions2 = {
    slidesPerView: 1.6
  }
  slidesOptions3 = {
    slidesPerView: 2
  }

  constructor(
    private dataService: DataService,
    private navCtrl: NavController,
    public commonHelpers: CommonHelpers) {}

  ionViewWillEnter() {
    setTimeout(() => {
    }, 10000)
  }

  ngOnInit() {
    this.dataService.getAllData().subscribe(res => {
      this.data = res
    })
    this.commonHelpers.arrivedAtHomePage = true
  }

  goToAssistanceDetailsPage(id) {
    return this.navCtrl.navigateForward(`assistance-details/${id}`)
  }
}
