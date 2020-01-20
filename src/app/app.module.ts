import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ActionSheet } from '@ionic-native/action-sheet';
import { Badge } from '@ionic-native/badge';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Brightness } from '@ionic-native/brightness';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { Deeplinks } from '@ionic-native/deeplinks';
import { File } from '@ionic-native/file';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Flashlight } from '@ionic-native/flashlight';
import { Instagram } from '@ionic-native/instagram';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from '@ionic-native/vibration';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';
import { Homepage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { BadgePage } from '../pages/badge-page/badge-page';
import { BrightnessPage } from '../pages/brightness-page/brightness-page';
import { CameraPage } from '../pages/camera/camera';
import { DatePickerPage } from '../pages/date-picker/date-picker';
import { FingerprintPage } from '../pages/fingerprint-page/fingerprint-page';
import { FlashlightPage } from '../pages/flashlight-page/flashlight-page';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpeechPage } from '../pages/speech-page/speech-page';
import { VibrationPage } from '../pages/vibration-page/vibration-page';
import { YoutubeVideoPlayerPage } from '../pages/youtube-video-player-page/youtube-video-player-page';

@NgModule({
  declarations: [
    MyApp,
    Homepage,
    ActionSheetPage,
    BadgePage,
    BrightnessPage,
    CameraPage,
    DatePickerPage,
    FingerprintPage,
    FlashlightPage,
    SpeechPage,
    VibrationPage,
    YoutubeVideoPlayerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Homepage,
    ActionSheetPage,
    BadgePage,
    BrightnessPage,
    CameraPage,
    DatePickerPage,
    FingerprintPage,
    FlashlightPage,
    SpeechPage,
    VibrationPage,
    YoutubeVideoPlayerPage
  ],
  providers: [
    ActionSheet,
    Badge,
    Base64ToGallery,
    Brightness,
    Camera,
    DatePicker,
    Deeplinks,
    File,
    FingerprintAIO,
    Flashlight,
    Instagram,
    SocialSharing,
    SpeechRecognition,
    StatusBar,
    SplashScreen,
    Vibration,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
