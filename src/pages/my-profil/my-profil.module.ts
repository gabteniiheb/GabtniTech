import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProfilPage } from './my-profil';

@NgModule({
  declarations: [
    MyProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProfilPage),
  ],
})
export class MyProfilPageModule {}
