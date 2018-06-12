import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { DonationsPage } from '../donations/donations';
import { User } from '../../objects/user';
import { Http } from '@angular/http';


@Component({
  selector: 'page-loginScreen',
  templateUrl: 'loginScreen.html'
})
export class LoginPage {

  public user: User = new User();

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    if (this.navParams.get('user')) {
      let user = this.navParams.get('user');
      //this.user.email = user.email;
      //this.user.password = user.password;
      this.user = user;
      this.user.id = 1;
    }
  }

  profileSend() {
    this.http
      .post("http://localhost:3000/login", {
        email: this.username,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);
          this.navCtrl.push(DonationsPage
            , {
              user: this.user
            });
        },
        error => {
          alert("Invalid Credentials");
          console.log(error);
        });
  }

  alert() {
    alert("username: " + this.username + ", password: " + this.password);
  }

  forgotPassword() {
    this.password = "your password";
  }

}
