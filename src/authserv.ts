import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthServ {

    constructor(public http: Http) {

    }

    login(email: string, password: string, callback: Function) {
        this.http
            .post("http://localhost:3000/login", {
                email: email,
                password: password
            })
            .subscribe(
                result => {
                    console.log(result);
                    var response = result.json();

                    localStorage.setItem("TOKEN", response.token);

                    callback();

                    //this.navCtrl.push(DonationsPage)
                },
                error => {
                    alert("Invalid Credentials");
                    callback(error);
                });
    }

}