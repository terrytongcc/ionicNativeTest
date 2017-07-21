import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Platform } from 'ionic-angular';

import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the FingerprintPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-fingerprint-page',
  templateUrl: 'fingerprint-page.html',
})
export class FingerprintPage {

	fingerprintOptions: FingerprintOptions;

  constructor(private faio: FingerprintAIO, private platform: Platform, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  	this.fingerprintOptions = {
  		clientId: 'fingerprint-demo',
  		clientSecret: 'password',
  		disableBackup: true
  	};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintPage');
  }

  async showFingerprintDialog() {
  	try {
	  	await this.platform.ready();
	  	const available = await this.faio.isAvailable();
	  	if (available === "OK") {
	  		const result = await this.faio.show(this.fingerprintOptions);
	  		console.log(result);
		  	this.presentToast(result.withFingerprint);
	  	}
  	} catch(e) {
  		this.presentToast(e);
  	}
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}
