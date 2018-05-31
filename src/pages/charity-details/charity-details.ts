import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharityListPage } from '../charity-list/charity-list';
import { DonationsPage } from '../donations/donations';
import { PayPlanPage } from '../pay-plan/pay-plan';

/**
 * Generated class for the CharityDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-charity-details',
  templateUrl: 'charity-details.html',
})
export class CharityDetailsPage {

  name: string;
  mission: string;
  contact: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    this.mission = navParams.get("mission");
    this.contact = navParams.get("contact");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityDetailsPage');
  }

  paymentDets(){
    this.navCtrl.push(PayPlanPage);
  }

}
