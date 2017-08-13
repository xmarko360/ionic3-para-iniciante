import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//importando nova aba 2 passo
import { FeedPage } from "../feed/feed";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  //nova aba 1ª passo
  tab4Root = FeedPage;

  constructor() {

  }
}
