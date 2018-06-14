import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

import { Chart } from '../../../node_modules/chart.js';
import { PercentagesPage } from '../percentages/percentages';
import { CharityListPage } from '../charity-list/charity-list';
import { PayMethPage } from '../pay-meth/pay-meth';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { sign, verify, decode} from 'jsonwebtoken';


@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html'
})

export class DonationsPage {
  @ViewChild('pieChart') pieChart;
  @ViewChild('barChart') barChart;
  @ViewChild('lineChart') lineChart;

  per_a: number;
  per_b: number;
  per_c: number;
  per_d: number;
  
  name: string;

  tabs: string;

  token: string;

  public charities: any = {
    "charities": [
      {
        charity: 'Charity A',
        percent: '25',
        color: 'greenyellow',
        hover: 'yellow'
      },
      {
        charity: 'Charity B',
        percent: '25',
        color: 'green',
        hover: 'yellow'
      },
      {
        charity: 'Charity C',
        percent: '25',
        color: 'goldenrod',
        hover: 'yellow'
      },
      {
        charity: 'Charity D',
        percent: '25',
        color: 'orangered',
        hover: 'yellow'
      }
    ]
  };
  public pieChartEl: any;
  public barChartEl: any;
  public lineChartEl: any;
  public chartLabels: any = [];
  public chartValues: any = [];
  public chartColours: any = [];
  public chartHoverColours: any = [];
  public chartLoadingEl: any;
detailing: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
      this.tabs = "portfolio";
      var token = localStorage.getItem("TOKEN");
      var details = decode(token);
      this.detailing = token;
      this.name = (details as any).user.username;
     }

  ionViewDidLoad() {
    this.defineChartData();
    this.createPieChart();
    this.createBarChart();
    this.createLineChart();
  }

  logout() {
    localStorage.clear();
    this.navCtrl.push(HomePage);
  }



  /**
   *
   * Parse the JSON data, push specific keys into selected arrays for use with
   * each chart
   *
   */
  defineChartData(): void {
    let k: any;

    for (k in this.charities.charities) {
      var cha = this.charities.charities[k];

      this.chartLabels.push(cha.charity);
      this.chartValues.push(cha.percent);
      this.chartColours.push(cha.color);
      this.chartHoverColours.push(cha.hover);
    }
  }




  /**
*
* Configure the Pie chart, define configuration options
*
*/
  createPieChart() {

    this.pieChartEl = new Chart(this.pieChart.nativeElement,
      {
        type: 'pie',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Daily Technology usage',
            data: this.chartValues,
            duration: 2000,
            easing: 'easeInQuart',
            backgroundColor: this.chartColours,
            hoverBackgroundColor: this.chartHoverColours
          }]
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 0,
              bottom: 0
            }
          },
          animation: {
            duration: 2500
          }
        }
      });

    this.chartLoadingEl = this.pieChartEl.generateLegend();
  }




  /**
   *
   * Configure the Bar chart, define configuration options
   *
   */
  createBarChart(): void {
    // We'll define the pie chart related logic here shortly
  }
  /**
   *
   * Configure the Line chart, define configuration options
   *
   */
  createLineChart(): void {
    // We'll define the pie chart related logic here shortly
  }

  percentages() {
    this.navCtrl.push(PercentagesPage);
  }

  profile() {
    this.navCtrl.push(ProfilePage);
  }

  projects() {
    this.navCtrl.push(CharityListPage);
  }

}