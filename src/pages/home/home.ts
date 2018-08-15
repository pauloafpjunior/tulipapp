import { DataRestProvider } from './../../providers/data-rest/data-rest';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private lstOrganizations: any;

  constructor(public navCtrl: NavController, private dataProvider: DataRestProvider) {

  }

  ionViewDidEnter(){
   this.dataProvider.getOrganizations().subscribe(
     (data) => {
        console.log(data);
     },
     (error) => {

     }
   );
  }

}
