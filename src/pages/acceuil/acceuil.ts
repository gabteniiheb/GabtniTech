import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})
export class AcceuilPage {




slides = [
    {
      title: "Welcome to the Docs!",
      price:"850 dt",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/images/im8.jpg",
    },
    {
      title: "What is Ionic?",
      price:"850 dt",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/images/img3.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      price:"850 dt",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/images/img18.jpg",
    }
  ];

 categorieSales =[
   {
     iconcat:"assets/images/categoriesicons/smartphoneicon.png",
     namecat:"SmartPhone",
   },
   {
    iconcat:"assets/images/categoriesicons/smartwatch.png",
    namecat:"SmartWatch",
  },
  {
    iconcat:"assets/images/categoriesicons/smarttvicon.png",
    namecat:"SmartTV",
  },
  {
    iconcat:"assets/images/categoriesicons/tabletteicon2.png",
    namecat:"Tablette",
  },
  {
    iconcat:"assets/images/categoriesicons/pcicon2.png",
    namecat:"PC",
  },
  {
    iconcat:"assets/images/categoriesicons/ecouteuricon.png",
    namecat:"Écouteur",
  }
 ];



  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Logout!',
      message: 'Do you want to exit from the apk!',
      buttons: ['Ok']
    });
    alert.present()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
  }

}
