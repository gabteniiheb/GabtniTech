import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { MenuPage } from '../pages/menu/menu';
import { CategoriesPage } from '../pages/categories/categories';
import { CartPage } from '../pages/cart/cart';
import { MyProfilPage } from '../pages/my-profil/my-profil';
import { DetailsPage } from '../pages/details/details';
import * as firebase from 'firebase'
import { AuthProvider } from '../providers/auth/auth';
// initialise firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfSGo-mtynv4KNh6VTaHrw2Lt0Iz-o8TY",
  authDomain: "gabtnitech.firebaseapp.com",
  projectId: "gabtnitech",
  storageBucket: "gabtnitech.appspot.com",
  messagingSenderId: "510875900260",
  appId: "1:510875900260:web:0e0c2f3235fd0434b4c271",
  measurementId: "G-J1QVJ5LW0B",
  databaseURL:"https://gabtnitech-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AcceuilPage,
    MenuPage,
    CategoriesPage,
    CartPage,
    MyProfilPage,
    DetailsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AcceuilPage,
    MenuPage,
    CategoriesPage,
    CartPage,
    MyProfilPage,
    DetailsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
   
  ]
})
export class AppModule {}
