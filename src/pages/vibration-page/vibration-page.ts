import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-vibration-page',
  templateUrl: 'vibration-page.html'
})
export class VibrationPage {

  constructor(private vibration: Vibration, public navCtrl: NavController) {

  }

  vibrate1sec():void {
  	this.vibration.vibrate(0);
  	this.vibration.vibrate(1000);
  }

  vibrateComplex():void {
  	this.vibration.vibrate(0);
  	this.vibration.vibrate([500,200,200,200,100,100,100]);
  }

}
