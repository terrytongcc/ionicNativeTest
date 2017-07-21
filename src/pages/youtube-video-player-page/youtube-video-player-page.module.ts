import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubeVideoPlayerPage } from './youtube-video-player-page';

@NgModule({
  declarations: [
    YoutubeVideoPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubeVideoPlayerPage),
  ],
  exports: [
    YoutubeVideoPlayerPage
  ]
})
export class YoutubeVideoPlayerPageModule {}
