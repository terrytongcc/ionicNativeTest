import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Instagram } from '@ionic-native/instagram';

/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

	private base64Image: string;
  private base64Data: string;
  private base64File;
	private canShareFacebook: boolean = false;
	private canShareInstagram: boolean = false;
  private options1: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    allowEdit: true
  }
	private options2: CameraOptions = {
	  destinationType: this.camera.DestinationType.FILE_URI,
	  encodingType: this.camera.EncodingType.PNG,
	  mediaType: this.camera.MediaType.PICTURE,
	  correctOrientation: true,
    allowEdit: true,
    saveToPhotoAlbum: true
	}

  constructor(private file: File, private base64ToGallery: Base64ToGallery, private instagram: Instagram, private socialSharing: SocialSharing, private camera: Camera, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  	this.socialSharing.canShareVia("com.facebook.katana",'msg', '', '', '').then(data => {
  		if (data === "OK") {
  			this.canShareFacebook = true;
  		}
  	});
		this.instagram.isInstalled().then(data => {
			if (data !== null) {
				this.canShareInstagram = true;
			}
		});
  }

  getPictureBase64() {
    this.base64Image = null;
    this.camera.getPicture(this.options1).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64Data = imageData;
    }, (err) => {
    });
  }

  getPictureFile() {
		this.camera.getPicture(this.options2).then((imageData) => {
      console.log(imageData);
      this.base64File = imageData;
		}, (err) => {
		});
  }

  shareToFacebook(mode) {
    if (mode == 1) {
      this.socialSharing.shareViaFacebookWithPasteMessageHint('My new picture capture by nativeTest',this.base64Image,"https://www.ionicframework.com","Please paste the message.");
    } else if (mode == 2) {
      this.socialSharing.shareViaFacebookWithPasteMessageHint('My new picture capture by nativeTest',this.base64File,"https://www.ionicframework.com","Please paste the message.");
    }
  }

  shareToInstagram(mode) {
    if (mode == 1) {
      this.instagram.share(this.base64Image,'My new picture capture by nativeTest');
    } else if (mode == 2) {
      this.instagram.share(this.base64File,'My new picture capture by nativeTest');
    }
  }

  saveToGallery(mode) {
    if (mode == 1) {
      this.base64ToGallery.base64ToGallery(this.base64Data, { 
        prefix: 'NT_'
      }).then(
        res => {
          this.presentToast("Image saved to gallery.");
        },
        err => console.log('Error saving image to gallery ', err)
      );

    } else if (mode == 2) {

      //Grab the file name of the photo in the temporary directory
      var currentName = this.base64File.replace(/^.*[\\\/]/, '');
     
      //Create a new name for the photo
      var d = new Date(),
          n = d.getTime(),
          newFileName = n + ".jpg";
     
      //Move the file to permanent storage
      this.file.moveFile(this.file.tempDirectory, currentName, this.file.dataDirectory, newFileName).then(function(success){
        console.log(success.nativeURL);
        //success.nativeURL will contain the path to the photo in permanent storage, do whatever you wish with it, e.g:
        //createPhoto(success.nativeURL);
     
      }, function(error){
        //an error occured
        this.presentToast("Save failed.");
      });

    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: String(msg),
      duration: 3000
    });
    toast.present();
  }

}
