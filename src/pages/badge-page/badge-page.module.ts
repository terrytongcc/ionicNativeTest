import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BadgePage } from './badge-page';

@NgModule({
  declarations: [
    BadgePage,
  ],
  imports: [
    IonicPageModule.forChild(BadgePage),
  ],
  exports: [
    BadgePage
  ]
})
export class BadgePageModule {}
