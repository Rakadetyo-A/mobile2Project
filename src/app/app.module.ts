import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from "@agm/core";

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { ProfilePage } from '../pages/profile/profile';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { RegisterEventPage } from '../pages/register-event/register-event';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';

import { QuotesService } from '../services/quotes';
import { SettingsService } from '../services/settings';
import { AuthService } from '../services/AuthService';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MapsPage,
    HomePage,
    ProfilePage,
    EventDetailPage,
    RegisterEventPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AgmCoreModule.forRoot({ apiKey: "AIzaSyAdnPwfydBvHl5t49DFVPOpLShCWdZJVpI"}) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MapsPage,
    LoginPage,
    HomePage,
    ProfilePage,
    EventDetailPage,
    RegisterEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService,
    AuthService,
    Geolocation,
    Network,
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider
  ]
})
export class AppModule {}
