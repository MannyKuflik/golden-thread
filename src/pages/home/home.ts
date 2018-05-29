import { Component } from '@angular/core';
import { NavController, PageTransition } from 'ionic-angular';
import { LoginPage } from '../loginScreen/loginScreen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loginClicker() {
    this.navCtrl.push(LoginPage);
  }

}
