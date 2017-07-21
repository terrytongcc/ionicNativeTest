import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

	private buttonLabels = ['Share via Facebook', 'Share via Twitter'];
	private options: ActionSheetOptions = {
	  title: 'What do you want with this image?',
	  subtitle: 'Choose an action',
	  buttonLabels: this.buttonLabels,
	  addCancelButtonWithLabel: 'Cancel',
	  addDestructiveButtonWithLabel: 'Delete',
	  androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
	  destructiveButtonLast: true
	};

  constructor(private toastCtrl: ToastController, private actionSheet: ActionSheet, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  showActionSheet() {
		this.actionSheet.show(this.options).then((buttonIndex: number) => {
		  this.presentToast('Button pressed: ' + buttonIndex);

		});
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}
