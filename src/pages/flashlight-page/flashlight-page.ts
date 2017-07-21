import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Flashlight } from '@ionic-native/flashlight';

/**
 * Generated class for the FlashlightPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-flashlight-page',
  templateUrl: 'flashlight-page.html',
})
export class FlashlightPage {

  constructor(public toastCtrl: ToastController, private flashlight: Flashlight, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

  ionViewWillLeave() {
  	this.flashlight.switchOff();
  }

  async toggleFlashlight():Promise<any> {
  	try {
  		const switchStatus = await this.flashlight.toggle();
  		this.presentToast(switchStatus);
  		return switchStatus;
  	} catch(e) {
  		this.presentToast(e);
  	}
  }  

  async switchOff():Promise<boolean> {
  	try {
  		const switchStatus = await this.flashlight.switchOff();
  		this.presentToast(switchStatus);
  		return switchStatus;
  	} catch(e) {
  		this.presentToast(e);
  	}
  }  

  async switchOn():Promise<boolean> {
  	try {
  		const switchStatus = await this.flashlight.switchOn();
  		this.presentToast(switchStatus);
  		return switchStatus;
  	} catch(e) {
  		this.presentToast(e);
  	}
  }  

  isSwitchOn():void {
  	this.presentToast(this.flashlight.isSwitchedOn());
  }

  async isAvailable():Promise<boolean> {
  	try {
  		const available = await this.flashlight.available();
  		this.presentToast(available);
  		return available;
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
