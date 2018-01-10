import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';
 
declare var Connection;
/*
  Generated class for the ConnectivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectivityProvider {

  onDevice: boolean;
  
   constructor(public platform: Platform, public network: Network){
     this.onDevice = this.platform.is('cordova');
   }
  
   isOnline(): boolean {
     if(this.onDevice && this.network.type){
       return this.network.type !== Connection.NONE;
     } else {
       return navigator.onLine;
     }
   }
  
   isOffline(): boolean {
     if(this.onDevice && this.network.type){
       return this.network.type === Connection.NONE;
     } else {
       return !navigator.onLine;  
     }
   }
  
}
