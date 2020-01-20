import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetPage } from '../action-sheet/action-sheet';
import { BadgePage } from '../badge-page/badge-page';
import { BrightnessPage } from '../brightness-page/brightness-page';
import { CameraPage } from '../camera/camera';
import { DatePickerPage } from '../date-picker/date-picker';
import { FingerprintPage } from '../fingerprint-page/fingerprint-page';
import { FlashlightPage } from '../flashlight-page/flashlight-page';
import { SpeechPage } from '../speech-page/speech-page';
import { VibrationPage } from '../vibration-page/vibration-page';
import { YoutubeVideoPlayerPage } from '../youtube-video-player-page/youtube-video-player-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Homepage {

  menuItems:Array<any> = [];

  constructor(public navCtrl: NavController) {

    this.menuItems = [
      {
        "title": "Action Sheet",
        "page": ActionSheetPage,
        "tabIndex": 0
      },
      {
        "title": "Badge",
        "page": BadgePage,
        "tabIndex": 2
      },
      {
        "title": "Brightness",
        "page": BrightnessPage,
        "tabIndex": 4
      },
      {
        "title": "Camera",
        "page": CameraPage,
        "tabIndex": 5
      },
      {
        "title": "Date Picker",
        "page": DatePickerPage,
        "tabIndex": 6
      },
      {
        "title": "Fingerprint",
        "page": FingerprintPage,
        "tabIndex": 7
      },
      {
        "title": "Flashlight",
        "page": FlashlightPage,
        "tabIndex": 8
      },
      {
        "title": "Speech",
        "page": SpeechPage,
        "tabIndex": 9
      },
      {
        "title": "Vibration",
        "page": VibrationPage,
        "tabIndex": 10
      },
      {
        "title": "Youtube Video Player",
        "page": YoutubeVideoPlayerPage,
        "tabIndex": 11
      },
    ];

  }

  openPage(page) {
    this.navCtrl.push(page.page, {}, {animate: false});
  }

}
