import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-loginScreen',
  templateUrl: 'loginScreen.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  profileSend() {
    this.navCtrl.push(ProfilePage);
  }

}
