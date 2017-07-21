import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppPrefPage } from './app-pref';

@NgModule({
  declarations: [
    AppPrefPage,
  ],
  imports: [
    IonicPageModule.forChild(AppPrefPage),
  ],
  exports: [
    AppPrefPage
  ]
})
export class AppPrefPageModule {}
