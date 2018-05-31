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

public username: string;
public password: string;

  constructor(public navCtrl: NavController) {
  }

  profileSend() {
    this.navCtrl.push(ProfilePage, {
      username: this.username
    });
  }

  alert(){
    alert("username: " + this.username + ", password: " + this.password);
  }

  forgotPassword(){
this.password = "your password";
  }

}
