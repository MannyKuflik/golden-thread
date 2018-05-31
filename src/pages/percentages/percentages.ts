import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonationsPage } from '../donations/donations';

/**
 * Generated class for the PercentagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-percentages',
  templateUrl: 'percentages.html',
})
export class PercentagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PercentagesPage');
  }

  newPercents(){
    this.navCtrl.push(DonationsPage);
  }

}
