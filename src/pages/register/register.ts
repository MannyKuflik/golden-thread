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
fname: string;
lname: string;
email: string;
street: string;
city: string;
state: string;
country: string;
zip: string;

  constructor(public navCtrl: NavController) {

  }
  submitClicker(){
    let address = this.street + ", " + this.city + " " + this.state + " " + this.country + " " + this.zip;
    let full_name = this.fname + " " + this.lname;
    this.navCtrl.push(ProfilePage, {
      username: full_name, email: this.email, address: address
    });
  }

}
