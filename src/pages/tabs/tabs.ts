import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MapsPage } from '../maps/maps';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homePage = HomePage;
  mapsPage = MapsPage;
  profilePage = ProfilePage;
}
