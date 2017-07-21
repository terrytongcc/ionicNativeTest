import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Brightness } from '@ionic-native/brightness';

/**
 * Generated class for the BrightnessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-brightness-page',
  templateUrl: 'brightness-page.html',
})
export class BrightnessPage {

	brightnessValue: number;

  constructor(public toastCtrl: ToastController, private brightnessClass: Brightness, public navCtrl: NavController, public navParams: NavParams) {
  }

  async setBrightness():Promise<any> {
  	try {
	  	let newBrightness = this.brightnessValue / 10;
	  	this.brightnessClass.setBrightness(newBrightness);
  	} catch(e) {
  		this.presentToast(e);
  	}
  }

	async getBrightness() {
		let currentBrightness = await this.brightnessClass.getBrightness();
		this.brightnessValue = currentBrightness * 10;
		console.log(currentBrightness);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrightnessPage');
  }
  ionViewDidEnter() {
  	this.getBrightness();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}