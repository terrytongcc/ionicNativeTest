import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-barcode-scanner-page',
  templateUrl: 'barcode-scanner-page.html',
})
export class BarcodeScannerPage {

	options: BarcodeScannerOptions = {
		prompt: 'Scan the barcode.',
		showTorchButton: true,
	};
	results: {};

  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  async scanBarcode() {
  	this.results = await this.barcodeScanner.scan(this.options);
  }

  async encodeData() {
  	await this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'http://rfi.asia/');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}
