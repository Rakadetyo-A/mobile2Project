import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Config } from 'ionic-angular/config/config';
import { EventDetailPage } from '../event-detail/event-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public config:Config,
              public modalCtrl: ModalController) {
    this.config.set('tabsPlacement', 'top');
  }

  showModal() {
    let modal = this.modalCtrl.create(EventDetailPage);
    modal.present();
    // modal.onDidDismiss((remove: boolean) => {
    //   if (remove) {
    //     this.quoteService.removeQuoteFromFavorites(quote);
    //     this.quotes = this.quoteService.getFavoriteQuotes();
    //   }
    // })
  }

}
