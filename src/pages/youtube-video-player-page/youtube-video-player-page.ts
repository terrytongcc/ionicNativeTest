import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the YoutubeVideoPlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-youtube-video-player-page',
  templateUrl: 'youtube-video-player-page.html',
})
export class YoutubeVideoPlayerPage {

  constructor(private youtube: YoutubeVideoPlayer, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubeVideoPlayerPage');
  }

  playYoutubeVideo() {
  	this.youtube.openVideo('YLfkgo-3_sk');
  }

}
