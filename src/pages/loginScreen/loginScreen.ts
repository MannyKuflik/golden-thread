import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { User } from '../../objects/user';


@Component({
  selector: 'page-loginScreen',
  templateUrl: 'loginScreen.html'
})
export class LoginPage {

  public user: User = new User();

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get('user')) {
      let user = this.navParams.get('user');
      //this.user.email = user.email;
      //this.user.password = user.password;
      this.user = user;
      this.user.id = 1;
    }
  }

  profileSend() {
    this.navCtrl.push(ProfilePage
      , {
        user: this.user
      });
  }

  alert() {
    alert("username: " + this.username + ", password: " + this.password);
  }

  forgotPassword() {
    this.password = "your password";
  }

}
