import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AcceuilPage } from '../acceuil/acceuil';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { MenuPage } from '../menu/menu';
import { AuthProvider } from "../../providers/auth/auth";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: any;
  password: any;
/* username= 'admin';
 password='admin';
 uname = 'admin';
 upass='admin';*/
  private todo: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    public authService: AuthProvider,
    private loadingCtrl: LoadingController,private alertCtrl: AlertController
  ) {}
  
  
  login() {

    let loader = this.loadingCtrl.create({
      content: 'Authenticating..'
    });
    loader.present();
    let loginParams = {
      email:this.email,
      password:this.password
    }

    this.authService.login(loginParams).then((res)=>{
      loader.dismiss();
      this.navCtrl.push('MenuPage');
    }).catch((err)=>{
      loader.dismiss();
      this.presentAlert(err.message);
    });


  }

  showRegisterPage() {
    this.navCtrl.push("RegisterPage");
  }

  presentAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Auth Error',
      subTitle: message,
      buttons: ['Close']
    });
    alert.present();
  }


}

