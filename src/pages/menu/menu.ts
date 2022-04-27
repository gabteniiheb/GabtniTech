import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AcceuilPage } from '../acceuil/acceuil';
import { CategoriesPage } from '../categories/categories';
import { CartPage } from '../cart/cart';
import { MyProfilPage } from '../my-profil/my-profil';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
 // set the root pages for each tab
 tab1Root: any = AcceuilPage ;
 tab2Root: any = CategoriesPage;
 tab3Root: any = CartPage;
 tab4Root: any = MyProfilPage;
 
 mySelectedIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mySelectedIndex = navParams.data.tabIndex || 0;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
