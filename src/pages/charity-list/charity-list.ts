import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharityDetailsPage } from '../charity-details/charity-details';

/**
 * Generated class for the CharityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-charity-list',
  templateUrl: 'charity-list.html',
})
export class CharityListPage {

  item = [
    {
      id: 1, name: "Charity A", mission: "we help people... Lorem ipsum " +
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
        " minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis auteirure dolor in " +
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
        " nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
        " sunt in culpa qui officia deserunt mollit anim id est laborum ",
      contact: "phone: 1-800-555-5484 | address: 22 Beverly Road, Awesome City, Kansas, USA 11254"
    },
    {
      id: 2, name: "Charity B", mission: "we help dogs... Lorem ipsum " +
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
        " minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis auteirure dolor in " +
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
        " nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
        " sunt in culpa qui officia deserunt mollit anim id est laborum ",
      contact: "phone: 1-808-826-7762 | address: 50 Lit Street, Alberto, VA, USA 10624"
    },
    {
      id: 3, name: "Charity C", mission: "we help people... Lorem ipsum " +
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
        " minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis auteirure dolor in " +
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
        " nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
        " sunt in culpa qui officia deserunt mollit anim id est laborum ",
      contact: "phone: 1-8888-678-2314 | address: 111 41st St, Phildelphia, PA, USA 10904"
    },
    {
      id: 4, name: "Charity D", mission: "we help the environment... Lorem ipsum " +
        "dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
        " minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis auteirure dolor in " +
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
        " nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
        " sunt in culpa qui officia deserunt mollit anim id est laborum ",
      contact: "phone: 1-914-255-3467 | address: 15 Franklin lane, Harrison, Ny USA 10528"
    }
  ];

  id: number;
  name: string;
  mission: string;
  contact: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityListPage');
  }

  charityClick(num: number) {
    this.navCtrl.push(CharityDetailsPage, {
      name: this.item[num].name, mission: this.item[num].mission, contact: this.item[num].contact
    });
  }

}
