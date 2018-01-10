import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Loc } from '../../models/location'
import { Config } from 'ionic-angular/config/config';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Geolocation } from '@ionic-native/geolocation';

import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';

import { RegisterEventPage } from '../register-event/register-event';
import { GoogleMap } from '@agm/core/services/google-maps-types';

declare var google;
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                public config: Config, 
                public modalCtrl: ModalController, 
                private geoloc: Geolocation,
                private googlemaps: GoogleMapsProvider,
                private locations: LocationsProvider,
                private platform: Platform) {
  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
        let mapLoaded = this.googlemaps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
        let locationsLoaded = this.locations.load();

        Promise.all([
          mapLoaded,
          locationsLoaded
      ]).then((result) => {

          let locations = result[1];

          for(let location of locations){
              this.googlemaps.addMarker(location.latitude, location.longitude);
          }

      });
    });
  }
  
  

}



//=========================BACKUP DOANG, COPY AJA KEDALAM KALO BUTUH========================//
// locationIsSet: boolean;
  // location : Loc;
  // lat : any;
  // lng : any;

  // @ViewChild('map') mapElement: ElementRef;
  // @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  // constructor(public navCtrl: NavController, 
  //             public navParams: NavParams, 
  //             public config: Config, 
  //             public modalCtrl: ModalController, 
  //             private geoloc: Geolocation,
  //             private googlemaps: GoogleMapsProvider,
  //             // public locations: LocationsProvider,
  //             private platform: Platform) 
  // {
  //   this.onLocate();
  //   this.location = new Loc(this.lat, this.lng);
  //   this.config.set('tabsPlacement', 'top');
  // }

  // onLocate()
  // {
  //   this.geoloc.getCurrentPosition()
  //   .then(
  //     currLocation => 
  //     {
  //       this.lat = currLocation.coords.latitude;
  //       this.lng = currLocation.coords.longitude;
  //       this.locationIsSet = true;
  //       this.location = new Loc(this.lat, this.lng);
  //       console.log(this.location);
  //     }
  //   )
  //   .catch(
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

  // onSetMarker(event: any) 
  // {
  //   this.location = new Loc(event.coords.lat, event.coords.lng);
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MapsPage');
  //   this.platform.ready().then(() => {
  //       let mapLoaded = this.googlemaps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
  //   });
  // }

  // showModal() {
  //   let modal = this.modalCtrl.create(RegisterEventPage);
  //   modal.present();
  //   // modal.onDidDismiss((remove: boolean) => {
  //   //   if (remove) {
  //   //     this.quoteService.removeQuoteFromFavorites(quote);
  //   //     this.quotes = this.quoteService.getFavoriteQuotes();
  //   //   }
  //   // })
  // }
