import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { AuthService } from '../services/AuthService';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Config } from 'ionic-angular/config/config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  loginPage = LoginPage;
  rootpage : any;


  @ViewChild('sideMenuContent') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    public config: Config,
    private AuthService : AuthService) {

      firebase.initializeApp({
        apiKey: "AIzaSyDNumy90ELm87esa9jgnCrPMOcPlyc9XBo",
        authDomain: "favorite-quotes-app-df83a.firebaseapp.com"
      });


      firebase.auth().onAuthStateChanged(user => {
          if(user){
          this.onLoad(this.tabsPage);
          }else{
           this.onLoad(this.loginPage);
          }
      });
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.rootpage = page;
    this.nav.setRoot(page);
    this.menuCtrl.close();

  }

  isLoginPage(){
    if(this.rootpage == this.loginPage)
    return true;
    else 
    return false;
  }

  logout(){
    this.AuthService.logout();
  }

}
