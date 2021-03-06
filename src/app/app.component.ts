import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { CategoriesPage } from '../pages/categories/categories';
import { CartPage } from '../pages/cart/cart';
import { MyProfilPage } from '../pages/my-profil/my-profil';
import { DetailsPage } from '../pages/details/details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      

    });
  }
}

