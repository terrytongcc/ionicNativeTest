import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FingerprintPage } from './fingerprint-page';

@NgModule({
  declarations: [
    FingerprintPage,
  ],
  imports: [
    IonicPageModule.forChild(FingerprintPage),
  ],
  exports: [
    FingerprintPage
  ]
})
export class FingerprintPageModule {}
