import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      title: "Welcome to Our shop!",
      description: "The <b>technology</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/images/slide1.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/images/slide2.jpg",
    },
    {
      title: "What is advanced Tech?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/images/slide3.jpg",
    }
  ];

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController) { }
  
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
    this.navCtrl.push(LoginPage);
    
  }
}