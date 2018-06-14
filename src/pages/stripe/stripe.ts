import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
declare var Stripe;
 
@Component({
    selector: 'page-stripe',
    templateUrl: 'stripe.html'
})

export class StripePage {
 
  stripe = Stripe('pk_test_a2Z2CqvGIBgIJi3MdNvYj3W6');
  card: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    this.setupStripe();
  }
 
  setupStripe(){
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
 
    this.card = elements.create('card', { style: style });
 
    this.card.mount('#card-element');
 
    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
 
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
 
      // this.stripe.createToken(this.card)
      this.stripe.createToken(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
        }
      });
    });
  }
 
}
// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { ThankyouPage } from '../thankyou/thankyou'

// declare var Stripe: any;
// @Component({
//     selector: 'page-stripe',
//     templateUrl: 'stripe.html'
// })
// export class StripePage {
//     private token: string = '';
//     private ngForm: any = {
//         cc: '',
//         cvc: '',
//         month: '',
//         year: ''

//     };
//     constructor(public nav: NavController) {
//         this.nav = nav;
//         console.log(Stripe);
//         Stripe.setPublishableKey('pk_test_a2Z2CqvGIBgIJi3MdNvYj3W6');
//     }
//     onSubmit() {
//         console.log(this.ngForm);
//         console.log('error');
//         Stripe.card.createToken({
//             number: this.ngForm.cc, //'1',
//             cvc: this.ngForm.cvc, //'123',
//             exp_month: this.ngForm.month, //12,
//             exp_year: this.ngForm.year, //2017,
//         }, (status, response) => this.stripeResponseHandler(status, response));
//     }
//     stripeResponseHandler(status, response) {
//         if (response.error) {
//             // Show the errors on the form
//             console.log('error');
//             console.log(response.error.message);
//         } else {
//             // response contains id and card, which contains additional card details
//             this.token = response.id;
//             // Insert the token into the form so it gets submitted to the server
//             console.log(this.token);
//             this.nav.push(ThankyouPage, { token: this.token });
//         }
//     }
// }


