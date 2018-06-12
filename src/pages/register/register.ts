import { Component } from '@angular/core';
import { NavController, PageTransition } from 'ionic-angular';
import { LoginPage } from '../loginScreen/loginScreen';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { Http } from '@angular/http';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirm_passowrd: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;

  constructor(public navCtrl: NavController, public http: Http) {

  }
  submitClicker() {
    let address = this.street + ", " + this.city + " " + this.state + " " + this.country + " " + this.zip;
    let full_name = this.fname + " " + this.lname;
    this.http
      .post("http://localhost:3000/registration", {
        firstname: this.fname,
        lastname: this.lname,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        result => {
          console.log(result);
          this.navCtrl.push(LoginPage, {
            username: full_name, email: this.email, address: address
          });
        },
        error => {
          alert("Cant register");
          console.log(error);
        });

  }

}
