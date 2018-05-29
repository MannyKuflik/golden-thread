import { Component } from '@angular/core';
import { NavController, PageTransition } from 'ionic-angular';
import { LoginPage } from '../loginScreen/loginScreen';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';

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

  registerClicker() {
    this.navCtrl.push(RegisterPage);
  }

}
