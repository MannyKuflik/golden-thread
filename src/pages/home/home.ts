import { Component } from '@angular/core';
import { NavController, PageTransition, NavParams } from 'ionic-angular';
import { LoginPage } from '../loginScreen/loginScreen';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { User } from '../../objects/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  loginClicker() {
    this.navCtrl.push(LoginPage, {
      user: this.user
    }
    );
  }

  registerClicker() {
    this.navCtrl.push(RegisterPage);
  }

}
