import { Component } from '@angular/core';
import { NavController, PageTransition, NavParams } from 'ionic-angular';
import { LoginPage } from '../loginScreen/loginScreen';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { User } from '../../objects/user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
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
