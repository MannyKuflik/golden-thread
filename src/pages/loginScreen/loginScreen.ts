import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { DonationsPage } from '../donations/donations';
import { User } from '../../objects/user';
import { Http } from '@angular/http';
import { AuthServ } from '../../authserv';


@Component({
  selector: 'page-loginScreen',
  templateUrl: 'loginScreen.html'
})
export class LoginPage {

  public user: User = new User();

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthServ) {
    if (this.navParams.get('user')) {
      let user = this.navParams.get('user');
      //this.user.email = user.email;
      //this.user.password = user.password;
      this.user = user;
      this.user.id = 1;
    }
  }

  profileSend() {
    let cb = (err) => {
      if (err) {
        return;
      }
      this.navCtrl.push(DonationsPage);
    }
    this.authService.login(this.username, this.password, cb)
  }

  alert() {
    alert("username: " + this.username + ", password: " + this.password);
  }

  forgotPassword() {
    this.username = "string"
    this.password = "string";
  }

}
