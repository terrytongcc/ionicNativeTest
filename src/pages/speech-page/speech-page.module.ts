import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeechPage } from './speech-page';

@NgModule({
  declarations: [
    SpeechPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeechPage),
  ],
  exports: [
    SpeechPage
  ]
})
export class SpeechPageModule {}
