import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonationsPage } from '../donations/donations';

/**
 * Generated class for the PayPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pay-plan',
  templateUrl: 'pay-plan.html',
})
export class PayPlanPage {

  amount: number;
  method: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPlanPage');
  }

  backTo(){
    if (this.amount > 0) {
    alert("Thanks for contributing towards saving the world!")
    this.navCtrl.push(DonationsPage)
    }
    else {
      alert("Invalid input, please input a valid number")
    }
  }

  paymentMethod(){
    this.navCtrl.push(DonationsPage)
  }

}
