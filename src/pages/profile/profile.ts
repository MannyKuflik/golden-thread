import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { LoginPage } from '../loginScreen/loginScreen';
import { CharityListPage } from '../charity-list/charity-list';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public email: string;
  public address: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.username = navParams.get("username");
  this.email = navParams.get("email");
  this.address = navParams.get("address");
  }

  logout() {
    this.navCtrl.push(HomePage);
  }

  charityList(){
    this.navCtrl.push(CharityListPage);
  }

}
