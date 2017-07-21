import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Badge } from '@ionic-native/badge';

/**
 * Generated class for the BadgePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-badge-page',
  templateUrl: 'badge-page.html',
})
export class BadgePage {

	messageCount: number = 0;

  constructor(public toastCtrl: ToastController, private badge: Badge, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgePage');
  }

  async clearBadge() {
  	try {
	  	await this.badge.clear();
	  	this.presentToast("Badge Cleared.");
  	} catch(e) {
  		this.presentToast(e);
  	}
  }

  async getBadge() {
  	try {
	  	let badgeAmount = await this.badge.get();
	  	this.presentToast("Badge Amount: "+badgeAmount);
  	} catch(e) {
  		this.presentToast(e);
  	}
  }

  async increaseBadge() {
  	this.messageCount++;
  	try {
	  	await this.badge.set(this.messageCount);
	  	this.presentToast("Set to: "+this.messageCount);
  	} catch(e) {
  		this.presentToast(e);
  	}
  }

  async decreaseBadge() {
  	if (this.messageCount > 1) {
	  	this.messageCount--;
	  	try {
		  	await this.badge.set(this.messageCount);
		  	this.presentToast("Set to: "+this.messageCount);
	  	} catch(e) {
	  		this.presentToast(e);
	  	}
  	}
  }

  async registerPermission() {
  	try {
	  	const permission = await this.badge.registerPermission();
	  	this.presentToast(permission);
  	} catch(e) {
	  	this.presentToast(e);
  	}
  }

  async hasPermission() {
  	const permission = await this.badge.hasPermission();
  	this.presentToast(permission);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}
