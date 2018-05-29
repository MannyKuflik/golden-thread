import { Component } from '@angular/core';
import { NavController, PageTransition } from 'ionic-angular';
import { LoginPage } from '../loginScreen/loginScreen';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }
  submitClicker(){
    this.navCtrl.push(ProfilePage);
  }

}
