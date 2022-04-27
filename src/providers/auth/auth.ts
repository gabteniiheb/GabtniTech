import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import firebase from 'firebase';
import { RegisterPage } from '../../pages/register/register';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  firedata = firebase.database().ref('/users');
  constructor(public events: Events) {}

  login(loginParams){
    var promise = new Promise((resolve, reject) => {
    
      firebase.auth().signInWithEmailAndPassword(loginParams.email, loginParams.password).then((userCredential) => {
        resolve(true);

      }).catch((err) => {
       
               reject(err);
       })
    })

    return promise;
  }

  registerUser(userObj: any) {
    var promise = new Promise((resolve, reject) => {
      firebase .auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
        .then(() => {
          this.firedata.child(firebase.auth().currentUser.uid).set({
            name:userObj.name,
            address:userObj.address,
            email:userObj.email
          }).then(()=>{
            resolve({ success: true });
          }).catch((err)=>{
            reject(err);
          })
         // resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    })
    return promise;
  }

  getuserdetails() {
    var promise = new Promise((resolve, reject) => {
    this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
      resolve(snapshot.val());
    }).catch((err) => {
      reject(err);
      })
    })
    return promise;
  }
}

