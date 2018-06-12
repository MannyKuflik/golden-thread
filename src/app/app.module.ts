import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/loginScreen/loginScreen';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { CharityListPage } from '../pages/charity-list/charity-list';
import { CharityDetailsPage } from '../pages/charity-details/charity-details';
import { DonationsPage } from '../pages/donations/donations';
import { PercentagesPage } from '../pages/percentages/percentages';
import { PayPlanPage } from '../pages/pay-plan/pay-plan';
import { PayMethPage } from '../pages/pay-meth/pay-meth';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CharityListPage,
    CharityDetailsPage,
    DonationsPage,
    PercentagesPage,
    PayPlanPage,
    PayMethPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CharityListPage,
    CharityDetailsPage,
    DonationsPage,
    PercentagesPage,
    PayPlanPage,
    PayMethPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
