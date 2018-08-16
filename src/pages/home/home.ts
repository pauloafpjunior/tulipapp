import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loading;
  public organizations: any;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController,
    private restProvider: RestProvider, private toastCtrl: ToastController) {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando organizações...'
    });
  }

  public ionViewDidEnter() {
    this.loading.present();
    this.restProvider.getOrganizations().subscribe(
      (data) => {
        this.loading.dismiss();
        console.log(data);
        this.organizations = data;
      }, (error) => {

        this.loading.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Não foi possível recuperar as informações',
          duration: 4000,
          position: 'bottom'
        });
      
        toast.present();
      }
    );
  }



}
