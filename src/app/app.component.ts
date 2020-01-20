import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { Deeplinks } from '@ionic-native/deeplinks';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Homepage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { BadgePage } from '../pages/badge-page/badge-page';
import { BrightnessPage } from '../pages/brightness-page/brightness-page';
import { CameraPage } from '../pages/camera/camera';
import { DatePickerPage } from '../pages/date-picker/date-picker';
import { FingerprintPage } from '../pages/fingerprint-page/fingerprint-page';
import { FlashlightPage } from '../pages/flashlight-page/flashlight-page';
import { SpeechPage } from '../pages/speech-page/speech-page';
import { VibrationPage } from '../pages/vibration-page/vibration-page';
import { YoutubeVideoPlayerPage } from '../pages/youtube-video-player-page/youtube-video-player-page';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Homepage;
  public menuItems:any;

  constructor(private deeplinks: Deeplinks, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {

    this.menuItems = [
      {
        "title": "Home",
        "page": Homepage,
        "tabIndex": 0
      },
      {
        "title": "Action Sheet",
        "page": ActionSheetPage,
        "tabIndex": 1
      },
      {
        "title": "Badge",
        "page": BadgePage,
        "tabIndex": 3
      },
      {
        "title": "Brightness",
        "page": BrightnessPage,
        "tabIndex": 5
      },
      {
        "title": "Camera",
        "page": CameraPage,
        "tabIndex": 6
      },
      {
        "title": "Date Picker",
        "page": DatePickerPage,
        "tabIndex": 7
      },
      {
        "title": "Fingerprint",
        "page": FingerprintPage,
        "tabIndex": 8
      },
      {
        "title": "Flashlight",
        "page": FlashlightPage,
        "tabIndex": 9
      },
      {
        "title": "Speech",
        "page": SpeechPage,
        "tabIndex": 10
      },
      {
        "title": "Vibration",
        "page": VibrationPage,
        "tabIndex": 11
      },
      {
        "title": "Youtube Video Player",
        "page": YoutubeVideoPlayerPage,
        "tabIndex": 12
      },
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

       // deeplinking settings
      this.deeplinks.route({
        '/actionsheet': ActionSheetPage,
        '/badge': BadgePage,
        '/brightness': BrightnessPage,
        '/camera': CameraPage,
        '/datepicker': DatePickerPage,
        '/fingerprint': FingerprintPage,
        '/flashlight': FlashlightPage,
        '/speech': SpeechPage,
        '/vibration': VibrationPage,
        '/youtube': YoutubeVideoPlayerPage
      }).subscribe((match) => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        this.nav.push(match.$route, {}, {animate: false});
        console.log('Successfully matched route', match);
      }, (nomatch) => {
        // nomatch.$link - the full link data
        console.error('Got a deeplink that didn\'t match', nomatch);
      });

    });
  }

  openPage(page) {
    if (page.tabIndex == 0) {
      this.nav.setRoot(Homepage);
    } else {
      this.nav.push(page.page, {}, {animate: false});
    }
    this.menuCtrl.close();
  }

}

