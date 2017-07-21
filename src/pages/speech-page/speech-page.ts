import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';

import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition';

/**
 * Generated class for the SpeechPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-speech-page',
  templateUrl: 'speech-page.html',
})
export class SpeechPage {

  speechList: Array<string> = [];
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;

  constructor(public toastCtrl: ToastController, private platform: Platform, private speech: SpeechRecognition, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeechPage');
  }

	listenForSpeech(): void {
	 
	  this.androidOptions = {
	    prompt: 'Speak into your phone!',
	    language: 'yue-Hant-HK'
	  }
	 
	  this.iosOptions = {
	    language: 'en-US'
	  }
	 
	  if (this.platform.is('android')) {
	    this.speech.startListening(this.androidOptions).subscribe(
        (matches: Array<string>) => {this.speechList = matches; console.log(matches); this.presentToast(matches[0])},
        (onerror) => this.presentToast(onerror)
//        data => this.speechList = data, error => console.log(error)
      );
	  }
	  else if (this.platform.is('ios')) {
	    this.speech.startListening(this.iosOptions).subscribe(data => this.speechList = data, error => console.log(error));
	  }
	}

  async getSupportedLanguages():Promise<Array<string>> {
  	try {
  		const languages = await this.speech.getSupportedLanguages();
  		this.presentToast(languages);
  		return languages;
  	} catch(e) {
  		this.presentToast(e);
  	}
  }

  async hasPermission():Promise<boolean> {
  	try {
  		const permission = await this.speech.hasPermission();
  		this.presentToast(permission);
  		return permission;
  	} catch(e) {
  		this.presentToast(e);
  	}
  }

  async getPermission():Promise<void> {
  	try {
  		const permission = await this.speech.requestPermission();
  		this.presentToast(permission);
  		return permission;
  	} catch (e) {
  		this.presentToast(e);
  	}
  }

  async isSpeechSupported():Promise<boolean> {
  	const isAvailable = await this.speech.isRecognitionAvailable();
  	this.presentToast(isAvailable);
  	return isAvailable;
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}
