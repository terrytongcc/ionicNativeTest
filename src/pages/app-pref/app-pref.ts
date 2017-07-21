import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AppPreferences } from '@ionic-native/app-preferences';

/**
 * Generated class for the AppPrefPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-app-pref',
  templateUrl: 'app-pref.html',
})
export class AppPrefPage {

  constructor(public appPreferences: AppPreferences, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppPrefPage');
  }

  showInterface() {
  	this.appPreferences.show();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}
