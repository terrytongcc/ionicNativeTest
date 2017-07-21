import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrightnessPage } from './brightness-page';

@NgModule({
  declarations: [
    BrightnessPage,
  ],
  imports: [
    IonicPageModule.forChild(BrightnessPage),
  ],
  exports: [
    BrightnessPage
  ]
})
export class BrightnessPageModule {}
