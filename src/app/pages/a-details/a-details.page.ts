import { Component, OnInit } from '@angular/core';
import { Data, DataService } from './../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-a-details',
  templateUrl: './a-details.page.html',
  styleUrls: ['./a-details.page.scss'],
})
export class ADetailsPage implements OnInit {

  data: Data = {
    title: 'nome',
    subtitle: 'descrição',
    rating: 5,
    distance: '10 km',
    pricemin: 'A partir de R$80',
    time: '60, 90 min',
    deliveryprice: 'R$10,00',
    description: 'um estabelecimento...',
    image: 'imagem'
  };
 
  dataId = null;

  slidesOptions2 = {
    slidesPerView: 2.2
  };

  constructor(private dataService: DataService, private loadingController: LoadingController, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.dataId = this.route.snapshot.params['id'];
    if (this.dataId)  {
      this.loadData();
    }
  }
 
  async loadData() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      cssClass: 'transparent',
      message: 'Carregando..'
    });
    await loading.present();
 
    this.dataService.getData(this.dataId).subscribe(res => {
      this.data = res;
      loading.dismiss();
      console.log(res)
    });
  }
 
}
